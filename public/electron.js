const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;   

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  exports.mainWindow = new BrowserWindow({
    width: 1500,
    height: 1000,
    title: "Musicfy",
    // titleBarStyle: "hiddenInset",
    // resizable: false,
  });
  exports.mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) exports.mainWindow.webContents.openDevTools();

  exports.mainWindow.on("closed", () => (exports.mainWindow = null));
}

/* app.removeAllListeners('ready'); */

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (exports.mainWindow === null) {
    createWindow();
  }
});