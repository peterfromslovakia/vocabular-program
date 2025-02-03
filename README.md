# Word Practice

**Word Practice** is a desktop application built using the Electron framework. It is designed to help users learn and practice English-Slovak vocabulary effectively. Users can add custom words, test their knowledge using the built-in quiz, and manage their word list. The program is user-friendly and adaptable to individual learning needs.

🔗 **For more information, visit the project website:**  
[https://peterfromslovakia.github.io/vocabular-web/](https://peterfromslovakia.github.io/vocabular-web/)

## Features

- **Vocabulary Quiz** – Users translate randomly selected words, and their performance statistics are displayed at the end of the test.
- **Word List** – The full list of stored words is available for browsing in the `words.json` database.
- **Add New Words** – Users can add their own words with English and Slovak translations.
- **Search Functionality** – Quickly find words using the built-in search feature.
- **Word Deletion** – Words can be removed from the list with a single click.
- **Pronunciation Playback** – Users can listen to the correct pronunciation of English words.

### Large Vocabulary Support
The application is optimized to handle a vast number of words, storing them in a local JSON file `words.json`. It allows users to manage thousands of words without compromising performance.

---

## Project Structure

### Root Directory
- **index.html** – The main HTML file for the user interface.
- **renderer.js** – Handles DOM manipulation and UI interactions.
- **styles.css** – Defines the visual appearance of the application.
- **package.json** – Specifies project dependencies and scripts.
- **package-lock.json** – Locks dependency versions for consistency.
- **preload.js** – Acts as a bridge between `main.js` and `renderer.js` for secure API exposure.
- **main.js** – The main process that manages application windows and system interactions.
- **images/** – Contains application icons and other assets.

### Additional Directories
- **node_modules/** – Contains installed dependencies managed via npm.
- **dist/** – Stores the packaged application:
  - **Vocabular-win32-x64/** – Includes the `.exe` file and supporting resources.
  - **resources/** – Holds the main application files, including the `app.asar` bundle.
- **user_data/** – Stores `words.json`, which holds the vocabulary data.

---

# Precvičovanie slovíčok

**Precvičovanie slovíčok** je desktopová aplikácia vyvinutá pomocou frameworku Electron. Aplikácia umožňuje efektívne učenie a precvičovanie anglicko-slovenských slovíčok. Používateľ môže pridávať vlastné slovíčka, testovať sa z existujúcej databázy a spravovať slovník. Program je navrhnutý tak, aby bol intuitívny a prispôsobený potrebám používateľa.

🔗 **Pre viac informácií navštívte webstránku:**  
[https://peterfromslovakia.github.io/vocabular-web/](https://peterfromslovakia.github.io/vocabular-web/)

## Funkcionality aplikácie

- **Testovanie slovíčok** – Používateľ prekladá náhodne vybrané slovíčka. Po ukončení testu sa zobrazí štatistika správnych odpovedí.
- **Zobrazenie slovíčok** – Používateľ si môže prezerať kompletný zoznam slovíčok uložených v databáze `words.json`.
- **Pridávanie slovíčok** – Možnosť pridávať nové slovíčka do databázy so slovenským a anglickým prekladom.
- **Vyhľadávanie slovíčok** – Rýchle filtrovanie slovíčok podľa zadaného textu.
- **Mazanie slovíčok** – Každé slovíčko v zozname je možné odstrániť jedným kliknutím.
- **Prehrávanie výslovnosti** – Možnosť vypočuť si výslovnosť anglických slovíčok.

### Podpora rozsiahlej databázy slovíčok
Aplikácia je optimalizovaná na prácu s veľkým množstvom slovíčok, pričom používa lokálny JSON súbor `words.json`. Používateľ môže mať uložené stovky až tisíce slovíčok bez negatívneho dopadu na výkon programu.

---

## Štruktúra projektu

### Koreňový adresár projektu
- **index.html** – Hlavný HTML súbor pre používateľské rozhranie.
- **renderer.js** – Skript na manipuláciu s DOM a obsluhu užívateľského rozhrania.
- **styles.css** – Štýly pre dizajn aplikácie.
- **package.json** – Definuje závislosti a skripty projektu.
- **package-lock.json** – Detailná verzia nainštalovaných závislostí.
- **preload.js** – Most medzi hlavným procesom (`main.js`) a renderer procesom (`renderer.js`).
- **main.js** – Hlavný proces aplikácie, ktorý spravuje systémové operácie.
- **images/** – Obsahuje obrázky a ikony.

### Ďalšie adresáre
- **node_modules/** – Obsahuje nainštalované závislosti (automaticky spravované cez npm).
- **dist/** – Obsahuje výslednú zabalenú aplikáciu:
  - **Vocabular-win32-x64/** – Obsahuje `.exe` súbor a ďalšie potrebné súbory.
  - **resources/** – Hlavné súbory aplikácie vrátane `app.asar`.
- **user_data/** – Obsahuje `words.json` pre ukladanie slovíčok.

---
