# Vocabular

Vocabular je desktopová aplikácia vyvinutá pomocou frameworku Electron na precvičovanie anglicko-slovenských slovíčok.

## Popis Štruktúry Projektu Vocabular

### Koreňový Adresár Projektu

- **index.html**: Hlavný HTML súbor, ktorý načítava používateľské rozhranie. Tento súbor definuje základnú štruktúru okna aplikácie.
- **renderer.js**: Skript, ktorý sa vykonáva v kontexte prehliadača a manipuluje s DOM a používateľským rozhraním.
- **styles.css**: Súbor so štýlmi pre vzhľad používateľského rozhrania.
- **package.json**: Definuje závislosti, skripty a informácie o projekte. Tento súbor je potrebný na zostavenie a spustenie aplikácie.
- **package-lock.json**: Detailná verzia závislostí vygenerovaná pri inštalácii balíčkov cez npm.
- **preload.js**: Most medzi hlavným procesom aplikácie (main.js) a renderer procesom (renderer.js). Používa sa na bezpečné prenášanie API a funkcionality.
- **main.js**: Hlavný proces aplikácie, ktorý vytvára okno a spravuje systémové operácie (napríklad čítanie a zápis do súborov).
- **images/**: Obsahuje ikony a obrázky potrebné na zobrazenie v aplikácii alebo na ikonách.

### Adresár node_modules/

Tento adresár obsahuje všetky závislosti (knižnice a balíčky) potrebné na beh aplikácie. Sem npm inštaluje balíčky definované v package.json. Tento adresár nie je potrebné manuálne manipulovať.

### Adresár dist/

Obsahuje výslednú aplikáciu po zabalení. Hlavné časti:
- **Vocabular-win32-x64/**: Obsahuje všetky súbory potrebné na spustenie aplikácie vrátane spustiteľného súboru Vocabular.exe.
- Obsah tohto adresára:
  - **Vocabular.exe**: Spustiteľný súbor aplikácie.
  - Súbory ako chrome_*.pak, .dll a resources.pak: Tieto súbory sú potrebné na beh aplikácie a obsahujú komponenty ako Chromium, ktoré Electron využíva.
  - **resources/**: Obsahuje hlavné súbory aplikácie vrátane balíka app.asar, kde sú zabalené zdrojové kódy.

### Adresár user_data/

Obsahuje **words.json**, ktorý aplikácia používa na uloženie a načítanie slovníka. Tento adresár môže byť špecifický pre používateľa alebo aplikáciu.

### Zhrnutie

- Koreňové súbory (napr. index.html, renderer.js, atď.) sú zdrojové kódy.
- **node_modules/** obsahuje závislosti a nie je potrebné ho prenášať mimo vývoja.
- **dist/** obsahuje konečnú aplikáciu pripravenú na inštaláciu a použitie.
- **user_data/** je adresár na dynamické dáta (napr.slovník), ktorý je súčasťou inštalácie alebo runtime aplikácie.
