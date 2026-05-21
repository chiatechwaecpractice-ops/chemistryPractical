(function(){
  "use strict";

  const STORAGE_KEY = "chiatechChemAuth";
  const DEVICE_KEY = "chiatechChemDevice";
  const PIN_KEY = "chiatechChemPin";
  const CACHE_VERSION = "2026.05.21";
  const appConfig = window.PORTAL_CONFIG || {};

  const tests = [
    ["Test 1", "test1/Chemistry Paper 3, May-June 2023.pdf", "2023 practical paper"],
    ["Test 2", "test2/Chemistry Paper 3, May-June 2023.pdf", "2023 practical paper"],
    ["Test 3", "test3/Chemistry Paper 3, May-June 2023.pdf", "2023 practical paper"],
    ["Test 4", "test4/Chemistry Paper 3, May-June 2023.pdf", "2023 practical paper"],
    ["Test 5", "test5/Chemistry Paper 3, May-June 2023.pdf", "2023 practical paper"],
    ["Test 6", "test6/test6.html", "Guided WAEC simulation"],
    ["Test 7", "test7/test7.html", "Guided WAEC simulation"],
    ["Test 8", "test8/test8.html", "Guided WAEC simulation"],
    ["Test 9", "test9/test9.html", "Guided WAEC simulation"],
    ["Test 10", "test10/test10.html", "Extended marking scheme"],
    ["Test 11", "test11/test11.html", "Extended marking scheme"],
    ["Test 12", "test12/test12.html", "Extended marking scheme"],
    ["Test 14", "test14/test14.html", "Set 2 Alternative B practice"],
    ["Test 15", "test15/test15.html", "Set 2 A1 strengthening drill"],
    ["Test 16", "test16/test16.html", "Set 2 final A1 readiness"]
  ];

  const authGate = document.getElementById("authGate");
  const appShell = document.getElementById("appShell");
  const pinForm = document.getElementById("pinForm");
  const pinInput = document.getElementById("pinInput");
  const authMessage = document.getElementById("authMessage");
  const offlineUnlock = document.getElementById("offlineUnlock");
  const lockApp = document.getElementById("lockApp");
  const syncDot = document.getElementById("syncDot");
  const syncTitle = document.getElementById("syncTitle");
  const syncText = document.getElementById("syncText");
  const installButtons = [document.getElementById("installApp"), document.getElementById("installAppTop")];

  let installPrompt = null;
  let refreshingForUpdate = false;

  function deviceId(){
    let id = localStorage.getItem(DEVICE_KEY);
    if(!id){
      id = (crypto.randomUUID && crypto.randomUUID()) || String(Date.now()) + Math.random().toString(16).slice(2);
      localStorage.setItem(DEVICE_KEY, id);
    }
    return id;
  }

  function savedSession(){
    try{
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if(!data || data.deviceId !== deviceId()) return null;
      if(data.expiresAt && Date.now() > Number(data.expiresAt)) return null;
      return data;
    }catch(error){
      return null;
    }
  }

  function setMessage(text, type){
    authMessage.textContent = text;
    authMessage.className = "auth-message" + (type ? " " + type : "");
  }

  function openPortal(session, mode){
    authGate.hidden = true;
    appShell.hidden = false;
    syncDot.className = "sync-dot " + (mode === "offline" ? "offline" : "ok");
    syncTitle.textContent = mode === "offline" ? "Welcome back" : "Class opened";
    syncText.textContent = session && session.name ? "Welcome, " + session.name : "Ready for today";
    renderTests();
    route();
    warmOfflineCache();
  }

  function lockPortal(){
    localStorage.removeItem(STORAGE_KEY);
    appShell.hidden = true;
    authGate.hidden = false;
    setMessage("Portal locked on this device.", "");
    pinInput.focus();
  }

  function verifyPin(pin){
    const url = appConfig.appsScriptUrl;
    if(!url || url.indexOf("PUT_WEB_APP_URL_HERE") !== -1){
      return Promise.reject(new Error("Please contact CHIATECH support to open this class."));
    }

    return new Promise((resolve, reject) => {
      const callbackName = "__chemAuth" + Date.now().toString(36);
      const script = document.createElement("script");
      const params = new URLSearchParams({
        action: "login",
        pin: pin,
        deviceId: deviceId(),
        deviceName: deviceName(),
        userAgent: navigator.userAgent || "",
        appVersion: CACHE_VERSION,
        callback: callbackName
      });

      const timeout = window.setTimeout(() => {
        cleanup();
        reject(new Error("The class took too long to open. Please try again."));
      }, 16000);

      function cleanup(){
        window.clearTimeout(timeout);
        delete window[callbackName];
        script.remove();
      }

      window[callbackName] = (payload) => {
        cleanup();
        if(payload && payload.ok) resolve(payload);
        else reject(new Error((payload && payload.message) || "PIN not accepted. Please check and try again."));
      };

      script.onerror = () => {
        cleanup();
        reject(new Error("We could not open the class right now. Please check your connection."));
      };

      script.src = url + (url.indexOf("?") === -1 ? "?" : "&") + params.toString();
      document.head.appendChild(script);
    });
  }

  pinForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const pin = pinInput.value.trim();
    if(!pin) return;
    setMessage("Opening your chemistry practical class...", "");
    try{
      const result = await verifyPin(pin);
      const session = {
        name: result.name || "Student",
        email: result.email || "",
        phone: result.phone || "",
        offlineAllowed: result.offlineAllowed !== false,
        deviceId: deviceId(),
        pinRef: result.pinRef || "",
        expiresAt: result.expiresAt || (Date.now() + 1000 * 60 * 60 * 24 * 180),
        savedAt: Date.now()
      };
      if(session.offlineAllowed){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
        localStorage.setItem(PIN_KEY, pin);
      }
      setMessage("Welcome. Your class is ready.", "ok");
      openPortal(session, "online");
    }catch(error){
      const offline = savedSession();
      if(offline && !navigator.onLine){
        openPortal(offline, "offline");
        return;
      }
      setMessage(error.message, "error");
    }
  });

  offlineUnlock.addEventListener("click", () => {
    const session = savedSession();
    if(session) openPortal(session, "offline");
    else setMessage("Enter your PIN first on this device, then you can continue learning here later.", "error");
  });

  lockApp.addEventListener("click", () => {
    localStorage.removeItem(PIN_KEY);
    lockPortal();
  });

  function renderTests(){
    const grid = document.getElementById("testGrid");
    if(!grid || grid.childElementCount) return;
    tests.forEach(([title, href, detail]) => {
      const card = document.createElement("article");
      card.className = "test-card";
      card.innerHTML = `<strong>${title}</strong><span>${detail}</span><a href="${href}">Open test</a>`;
      grid.appendChild(card);
    });
  }

  function route(){
    const id = (location.hash || "#dashboard").slice(1);
    document.querySelectorAll(".view").forEach(view => {
      view.classList.toggle("active-view", view.id === id);
    });
    document.querySelectorAll(".side-nav a").forEach(link => {
      link.classList.toggle("active", link.dataset.route === id);
    });
    if(!document.getElementById(id)){
      location.hash = "#dashboard";
    }
  }

  function warmOfflineCache(){
    if("serviceWorker" in navigator){
      navigator.serviceWorker.register("service-worker.js").then(registration => {
        watchForUpdates(registration);
        if(registration.active){
          registration.active.postMessage({type:"WARM_CACHE"});
        }
      }).catch(() => {
        syncText.textContent = "Lessons are available while this page stays open";
      });
    }
  }

  function watchForUpdates(registration){
    if(registration.waiting){
      showUpdatePrompt(registration);
    }
    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      if(!worker) return;
      worker.addEventListener("statechange", () => {
        if(worker.state === "installed" && navigator.serviceWorker.controller){
          showUpdatePrompt(registration);
        }
      });
    });
  }

  function showUpdatePrompt(registration){
    if(document.getElementById("updateNotice")) return;
    const notice = document.createElement("div");
    notice.id = "updateNotice";
    notice.className = "update-notice";
    notice.innerHTML = `
      <strong>New lessons are ready.</strong>
      <span>Refresh now to open the updated practical tests. Your access will remain saved on this device.</span>
      <button type="button" id="applyUpdate">Refresh now</button>
      <button type="button" id="dismissUpdate">Later</button>
    `;
    document.body.appendChild(notice);
    document.getElementById("applyUpdate").addEventListener("click", () => {
      refreshingForUpdate = true;
      if(registration.waiting){
        registration.waiting.postMessage({type:"SKIP_WAITING"});
      }else{
        location.reload();
      }
    });
    document.getElementById("dismissUpdate").addEventListener("click", () => notice.remove());
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("online", () => {
    if(!appShell.hidden){
      syncDot.className = "sync-dot ok";
      syncTitle.textContent = "Connected";
      syncText.textContent = "Your class is up to date";
    }
  });
  window.addEventListener("offline", () => {
    if(!appShell.hidden){
      syncDot.className = "sync-dot offline";
      syncTitle.textContent = "Continue learning";
      syncText.textContent = "Opened from this device";
    }
  });

  if("serviceWorker" in navigator){
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if(refreshingForUpdate){
        location.reload();
      }
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    installButtons.forEach(button => {
      if(button) button.hidden = false;
    });
  });

  installButtons.forEach(button => {
    if(!button) return;
    button.addEventListener("click", async () => {
      if(!installPrompt) return;
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      installButtons.forEach(item => item.hidden = true);
    });
  });

  startAccessFlow();

  async function startAccessFlow(){
    authGate.hidden = false;
    appShell.hidden = true;
    const session = savedSession();
    if(!session) return;

    const storedPin = localStorage.getItem(PIN_KEY);
    if(navigator.onLine && storedPin){
      setMessage("Refreshing your class access...", "");
      try{
        const result = await verifyPin(storedPin);
        const refreshed = {
          name: result.name || session.name || "Student",
          email: result.email || session.email || "",
          phone: result.phone || session.phone || "",
          offlineAllowed: result.offlineAllowed !== false,
          deviceId: deviceId(),
          pinRef: result.pinRef || session.pinRef || "",
          expiresAt: result.expiresAt || session.expiresAt || (Date.now() + 1000 * 60 * 60 * 24 * 180),
          savedAt: Date.now()
        };
        if(refreshed.offlineAllowed){
          localStorage.setItem(STORAGE_KEY, JSON.stringify(refreshed));
          openPortal(refreshed, "online");
        }else{
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(PIN_KEY);
          setMessage("Please enter your PIN to continue.", "");
        }
      }catch(error){
        setMessage("Welcome back. Continue learning on this device or enter your PIN again.", "");
      }
      return;
    }

    if(!navigator.onLine){
      openPortal(session, "offline");
    }else{
      setMessage("Welcome back. Enter your PIN or continue learning on this device.", "");
    }
  }

  function deviceName(){
    const platform = navigator.userAgentData && navigator.userAgentData.platform
      ? navigator.userAgentData.platform
      : navigator.platform || "Student device";
    const screenSize = window.screen ? `${window.screen.width}x${window.screen.height}` : "";
    return [platform, screenSize].filter(Boolean).join(" ");
  }
})();
