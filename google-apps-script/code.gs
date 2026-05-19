const SPREADSHEET_ID = "1EqmE5tUIOHHt2dKkhGe66wQBNHonq75tTV0UdBFD8VY";
const PREFERRED_SHEET_NAME = "PINS";
const LOG_SHEET_NAME = "LOGIN_LOGS";

function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};
  const callback = safeCallback_(params.callback || "callback");
  const action = clean_(params.action || "status").toLowerCase();
  let payload;

  try {
    payload = action === "login"
      ? verifyPin_(params)
      : { ok: true, message: "CHIATECH Chemistry Practical class is ready." };
  } catch (error) {
    payload = {
      ok: false,
      message: error && error.message ? error.message : "The class could not open. Please try again."
    };
  }

  return ContentService
    .createTextOutput(callback + "(" + JSON.stringify(payload) + ");")
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function verifyPin_(params) {
  const pin = clean_(params.pin);
  const deviceId = clean_(params.deviceId);
  const deviceName = clean_(params.deviceName);
  const appVersion = clean_(params.appVersion);
  const userAgent = clean_(params.userAgent);

  if (!pin) throw new Error("Please enter your class PIN.");
  if (!deviceId) throw new Error("Please refresh this page and try again.");

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getPinsSheet_(ss);
  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    throw new Error("No student PIN has been added yet.");
  }

  const headers = values[0].map(function(value) {
    return clean_(value);
  });
  const idx = indexMap_(headers);

  if (idx.PIN < 0) {
    throw new Error("The sheet must contain a PIN column.");
  }

  for (let row = 1; row < values.length; row++) {
    const sheetPin = clean_(values[row][idx.PIN]);
    if (sheetPin !== pin) continue;

    const status = idx.STATUS > -1 ? clean_(values[row][idx.STATUS]) : "";
    if (!isAllowedStatus_(status)) {
      throw new Error("This PIN is not active. Please contact your tutor.");
    }

    const offlineAllowed = idx.OFFLINEALLOWED > -1
      ? isPositive_(values[row][idx.OFFLINEALLOWED])
      : true;

    const now = new Date();
    const updates = {};

    setIfColumn_(updates, idx.DEVICEID, deviceId);
    setIfColumn_(updates, idx.DEVICENAME, deviceName);
    setIfColumn_(updates, idx.LASTLOGIN, now);
    setIfColumn_(updates, idx.USERAGENT, userAgent);

    if (idx.FIRSTLOGIN > -1 && !values[row][idx.FIRSTLOGIN]) {
      updates[idx.FIRSTLOGIN] = now;
    }

    if (idx.LOGINCOUNT > -1) {
      updates[idx.LOGINCOUNT] = Number(values[row][idx.LOGINCOUNT] || 0) + 1;
    }

    writeRowUpdates_(sheet, row + 1, updates);

    const student = {
      ok: true,
      message: "Welcome. Your class is ready.",
      pinRef: maskPin_(pin),
      name: idx.NAME > -1 ? clean_(values[row][idx.NAME]) : "Student",
      email: idx.EMAIL > -1 ? clean_(values[row][idx.EMAIL]) : "",
      phone: idx.PHONE > -1 ? clean_(values[row][idx.PHONE]) : "",
      status: status || "ACTIVE",
      offlineAllowed: offlineAllowed
    };

    logLogin_(ss, {
      pinRef: student.pinRef,
      name: student.name,
      email: student.email,
      phone: student.phone,
      deviceId: deviceId,
      deviceName: deviceName,
      appVersion: appVersion,
      userAgent: userAgent,
      status: "SUCCESS"
    });

    return student;
  }

  logLogin_(ss, {
    pinRef: maskPin_(pin),
    name: "",
    email: "",
    phone: "",
    deviceId: deviceId,
    deviceName: deviceName,
    appVersion: appVersion,
    userAgent: userAgent,
    status: "FAILED"
  });

  throw new Error("PIN not found. Please check the number and try again.");
}

function setupPinsSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(PREFERRED_SHEET_NAME);

  if (!sheet) {
    sheet = ss.getSheets()[0] || ss.insertSheet(PREFERRED_SHEET_NAME);
  }

  const headers = [
    "PIN",
    "Name",
    "Email",
    "Phone",
    "Status",
    "DeviceId",
    "DeviceName",
    "OTP",
    "OTPExpiry",
    "LastLogin",
    "OfflineAllowed",
    "firstlogin",
    "logincount",
    "useragent"
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);

  if (sheet.getLastRow() === 1) {
    sheet.getRange(2, 1, 1, headers.length).setValues([
      ["123456", "Demo Student", "", "", "ACTIVE", "", "", "", "", "", "YES", "", 0, ""]
    ]);
  }
}

function getPinsSheet_(ss) {
  return ss.getSheetByName(PREFERRED_SHEET_NAME) || ss.getSheets()[0];
}

function indexMap_(headers) {
  const map = {};

  headers.forEach(function(header, index) {
    map[normalHeader_(header)] = index;
  });

  return {
    PIN: getIndex_(map, ["PIN"]),
    NAME: getIndex_(map, ["NAME"]),
    EMAIL: getIndex_(map, ["EMAIL"]),
    PHONE: getIndex_(map, ["PHONE"]),
    STATUS: getIndex_(map, ["STATUS"]),
    DEVICEID: getIndex_(map, ["DEVICEID", "DEVICE_ID"]),
    DEVICENAME: getIndex_(map, ["DEVICENAME", "DEVICE_NAME"]),
    OTP: getIndex_(map, ["OTP"]),
    OTPEXPIRY: getIndex_(map, ["OTPEXPIRY", "OTP_EXPIRY"]),
    LASTLOGIN: getIndex_(map, ["LASTLOGIN", "LAST_LOGIN"]),
    OFFLINEALLOWED: getIndex_(map, ["OFFLINEALLOWED", "OFFLINE_ALLOWED"]),
    FIRSTLOGIN: getIndex_(map, ["FIRSTLOGIN", "FIRST_LOGIN"]),
    LOGINCOUNT: getIndex_(map, ["LOGINCOUNT", "LOGIN_COUNT"]),
    USERAGENT: getIndex_(map, ["USERAGENT", "USER_AGENT"])
  };
}

function getIndex_(map, names) {
  for (let i = 0; i < names.length; i++) {
    const key = normalHeader_(names[i]);
    if (Object.prototype.hasOwnProperty.call(map, key)) {
      return map[key];
    }
  }

  return -1;
}

function normalHeader_(value) {
  return clean_(value).replace(/[^a-z0-9]/gi, "").toUpperCase();
}

function setIfColumn_(updates, columnIndex, value) {
  if (columnIndex > -1) {
    updates[columnIndex] = value;
  }
}

function writeRowUpdates_(sheet, rowNumber, updates) {
  Object.keys(updates).forEach(function(columnIndex) {
    sheet.getRange(rowNumber, Number(columnIndex) + 1).setValue(updates[columnIndex]);
  });
}

function isAllowedStatus_(status) {
  const value = clean_(status).toUpperCase();

  if (!value) return true;

  const blocked = ["INACTIVE", "BLOCKED", "EXPIRED", "SUSPENDED", "DISABLED", "NO", "FALSE", "0"];
  if (blocked.indexOf(value) > -1) return false;

  const allowed = ["ACTIVE", "APPROVED", "PAID", "YES", "TRUE", "1", "ENABLED", "ALLOW", "ALLOWED"];
  return allowed.indexOf(value) > -1;
}

function isPositive_(value) {
  const text = clean_(value).toUpperCase();

  if (!text) return true;

  return ["YES", "TRUE", "1", "ACTIVE", "ALLOW", "ALLOWED"].indexOf(text) > -1;
}

function safeCallback_(value) {
  const name = clean_(value);
  return /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(name) ? name : "callback";
}

function clean_(value) {
  return String(value == null ? "" : value).trim();
}

function maskPin_(pin) {
  const text = clean_(pin);

  if (text.length <= 4) return "****";

  return text.slice(0, 2) + "****" + text.slice(-2);
}

function logLogin_(ss, item) {
  let sheet = ss.getSheetByName(LOG_SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(LOG_SHEET_NAME);
    sheet.appendRow([
      "TIME",
      "PIN_REF",
      "NAME",
      "EMAIL",
      "PHONE",
      "DEVICE_ID",
      "DEVICE_NAME",
      "APP_VERSION",
      "USER_AGENT",
      "STATUS"
    ]);
  }

  sheet.appendRow([
    new Date(),
    item.pinRef,
    item.name,
    item.email,
    item.phone,
    item.deviceId,
    item.deviceName,
    item.appVersion,
    item.userAgent,
    item.status
  ]);
}
