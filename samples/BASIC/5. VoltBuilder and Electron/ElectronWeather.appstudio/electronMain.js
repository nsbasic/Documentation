const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
  	width: 768,
  	height: 1004,
  	icon:__dirname+'/img/AppStudio.icns',
  	title: 'Electron Weather',
  	webPreferences: {nodeIntegration: true, contextIsolation: false, enableRemoteModule: true},
  	})

  mainWindow.loadFile('index.html')

  mainWindow.webContents.openDevTools()
 	
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow();
})