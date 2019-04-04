const electron = require('electron');
const path = require('path');
const url = require('url');


const {app, BrowserWindow,Menu,ipcMain} = electron;

let mainWindow;

app.on('ready',()=>{
  mainWindow = new BrowserWindow({});

  mainWindow.loadURL(url.format({
      pathname : path.join(__dirname,'mainwindow.html'),
      protocol: 'file:',
      slashes : true
   }));
   
});