const fs = require('fs');
const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');

// Cesta k predvyplnenému `words.json` v priečinku inštalácie
const defaultWordsPath = path.join(process.resourcesPath, 'user_data', 'words.json');

// Cesta k zapisovateľnému priečinku `AppData`
const userDataPath = app.getPath('userData');
const wordsFilePath = path.join(userDataPath, 'words.json');

// Zabezpečenie, aby priečinok `userData` existoval
if (!fs.existsSync(userDataPath)) {
    fs.mkdirSync(userDataPath, { recursive: true });
}

// Skontroluj a skopíruj správny `words.json`
function ensureWordsFile() {
    if (!fs.existsSync(wordsFilePath)) {
        console.log(`Kopírujem predvyplnený súbor z ${defaultWordsPath} do ${wordsFilePath}`);
        fs.copyFileSync(defaultWordsPath, wordsFilePath);
    } else {
        console.log(`Súbor words.json už existuje na ceste: ${wordsFilePath}`);
    }
}

ensureWordsFile();

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        fullscreen: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    mainWindow.maximize();
    mainWindow.loadFile('index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

// Čítanie slovíčok
ipcMain.handle('read-words', async () => {
    try {
        const data = fs.readFileSync(wordsFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Chyba pri čítaní slovíčok:', error.message);
        return [];
    }
});

// Zápis slovíčok
ipcMain.handle('write-words', async (_, words) => {
    try {
        fs.writeFileSync(wordsFilePath, JSON.stringify(words, null, 2), 'utf-8');
        return true;
    } catch (error) {
        console.error('Chyba pri zápise slovíčok:', error.message);
        return false;
    }
});

// Inicializácia aplikácie
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Ukončenie aplikácie
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
