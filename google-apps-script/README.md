# CHIATECH PIN Sheet Setup

This login script is already pointed to this spreadsheet:

`1EqmE5tUIOHHt2dKkhGe66wQBNHonq75tTV0UdBFD8VY`

Expected sheet headers:

`PIN, Name, Email, Phone, Status, DeviceId, DeviceName, OTP, OTPExpiry, LastLogin, OfflineAllowed, firstlogin, logincount, useragent`

How to deploy:

1. Open the Google Sheet.
2. Open Extensions > Apps Script.
3. Paste `code.gs`.
4. Run `setupPinsSheet()` once if you need the header row created.
5. Deploy as Web app.
6. Use:
   - Execute as: Me
   - Who has access: Anyone
7. Copy the Web app URL into `window.PORTAL_CONFIG.appsScriptUrl` in `index.html`.

PIN rules:

- PINs are read from the `PIN` column.
- `Status` can be `ACTIVE`, `APPROVED`, `PAID`, `YES`, `TRUE`, `1`, `ENABLED`, `ALLOW`, or `ALLOWED`.
- Blank `Status` is allowed.
- `INACTIVE`, `BLOCKED`, `EXPIRED`, `SUSPENDED`, `DISABLED`, `NO`, `FALSE`, or `0` are rejected.
- `OfflineAllowed` is treated as yes when blank; use `NO` or `FALSE` to stop saved access on that device.
