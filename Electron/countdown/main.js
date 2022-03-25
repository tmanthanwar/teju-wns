const{app, BrowserWindow} = require('electron');
const path = require('path');
const countdown = require('./render');
const createWindow = function(){
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            preload : path.join(__dirname, 'render.js')
        }
    });
    win.loadFile('countdown.html');

    countdown();
   
};

app.whenReady().then(function(){
    createWindow();
});

app.on("window-all-closed",function(){
    if(process.platform !== 'darwin'){
        app.quit();
    };
});