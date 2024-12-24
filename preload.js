const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    // Načítanie slovíčok z hlavného procesu
    readWords: () => ipcRenderer.invoke('read-words'),

    // Zápis slovíčok do hlavného procesu
    writeWords: (words) => ipcRenderer.invoke('write-words', words),

    // Debug logovanie
    logMessage: (message) => ipcRenderer.send('log-message', message),
});
