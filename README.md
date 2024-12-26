# English

## Vocabular

Vocabular is a desktop application developed using the Electron framework for practicing English-Slovak vocabulary.

### Project Structure Description for Vocabular

#### Root Directory of the Project

- **index.html**: The main HTML file that loads the user interface. This file defines the basic structure of the application window.
- **renderer.js**: The script executed in the browser context, handling DOM manipulation and user interface logic.
- **styles.css**: The stylesheet file for defining the appearance of the user interface.
- **package.json**: Defines project dependencies, scripts, and metadata. This file is essential for building and running the application.
- **package-lock.json**: A detailed version of the dependencies generated during the installation of packages via npm.
- **preload.js**: A bridge between the main process (main.js) and the renderer process (renderer.js). It is used for securely exposing APIs and functionalities.
- **main.js**: The main process of the application, responsible for creating the window and managing system operations (such as file read and write).
- **images/**: Contains icons and images used within the application or for app icons.

#### node_modules/ Directory

This directory contains all dependencies (libraries and packages) needed for running the application. npm installs packages defined in package.json into this directory. No manual intervention is needed here.

#### dist/ Directory

Contains the final packaged application. Key components:
- **Vocabular-win32-x64/**: Holds all files required to run the application, including the executable file Vocabular.exe.
- Contents of this directory:
  - **Vocabular.exe**: The executable file of the application.
  - Files like chrome_*.pak, .dll, and resources.pak: These are required for the application to run and include components like Chromium, used by Electron.
  - **resources/**: Contains the main application files, including the app.asar bundle where source codes are packed.

#### user_data/ Directory

Contains **words.json**, which the application uses to store and retrieve the vocabulary. This directory can be user-specific or application-specific.

#### Summary

- Root files (e.g., index.html, renderer.js, etc.) represent the source code.
- **node_modules/** contains dependencies and does not need to be transferred outside of the development environment.
- **dist/** contains the final packaged application ready for installation and use.
- **user_data/** is a directory for dynamic data (e.g., the vocabulary), included as part of the installation or runtime application.

---

# Slovensky

## Vocabular

Vocabular je desktopová aplikácia vyvinutá pomocou frameworku Electron na precvičovanie anglicko-slovenských slovíčok.

### Popis Štruktúry Projektu Vocabular

#### Koreňový Adresár Projektu

- **index.html**: Hlavný HTML súbor, ktorý načítava používateľské rozhranie. Tento súbor definuje základnú štruktúru okna aplikácie.
- **renderer.js**: Skript, ktorý sa vykonáva v kontexte prehliadača a manipuluje s DOM a používateľským rozhraním.
- **styles.css**: Súbor so štýlmi pre vzhľad používateľského rozhrania.
- **package.json**: Definuje závislosti, skripty a informácie o projekte. Tento súbor je potrebný na zostavenie a spustenie aplikácie.
- **package-lock.json**: Detailná verzia závislostí vygenerovaná pri inštalácii balíčkov cez npm.
- **preload.js**: Most medzi hlavným procesom aplikácie (main.js) a renderer procesom (renderer.js). Používa sa na bezpečné prenášanie API a funkcionality.
- **main.js**: Hlavný proces aplikácie, ktorý vytvára okno a spravuje systémové operácie (napríklad čítanie a zápis do súborov).
- **images/**: Obsahuje ikony a obrázky potrebné na zobrazenie v aplikácii alebo na ikonách.

#### Adresár node_modules/

Tento adresár obsahuje všetky závislosti (knižnice a balíčky) potrebné na beh aplikácie. Sem npm inštaluje balíčky definované v package.json. Tento adresár nie je potrebné manuálne manipulovať.

#### Adresár dist/

Obsahuje výslednú aplikáciu po zabalení. Hlavné časti:
- **Vocabular-win32-x64/**: Obsahuje všetky súbory potrebné na spustenie aplikácie vrátane spustiteľného súboru Vocabular.exe.
- Obsah tohto adresára:
  - **Vocabular.exe**: Spustiteľný súbor aplikácie.
  - Súbory ako chrome_*.pak, .dll a resources.pak: Tieto súbory sú potrebné na beh aplikácie a obsahujú komponenty ako Chromium, ktoré Electron využíva.
  - **resources/**: Obsahuje hlavné súbory aplikácie vrátane balíka app.asar, kde sú zabalené zdrojové kódy.

#### Adresár user_data/

Obsahuje **words.json**, ktorý aplikácia používa na uloženie a načítanie slovníka. Tento adresár môže byť špecifický pre používateľa alebo aplikáciu.

#### Zhrnutie

- Koreňové súbory (napr. index.html, renderer.js, atď.) sú zdrojové kódy.
- **node_modules/** obsahuje závislosti a nie je potrebné ho prenášať mimo vývoja.
- **dist/** obsahuje konečnú aplikáciu pripravenú na inštaláciu a použitie.
- **user_data/** je adresár na dynamické dáta (napr.slovník), ktorý je súčasťou inštalácie alebo runtime aplikácie.
