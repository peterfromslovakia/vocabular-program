document.addEventListener('DOMContentLoaded', async () => {
    let words = await window.api.readWords();
    let testStats = {
        total: 0,
        correct: 0,
        incorrect: 0,
        wrongWords: {}
    };
    let currentWordIndex = null;

    const updateWordCount = () => {
        const wordCount = words.length;
        document.getElementById('wordCount').textContent = `V databáze je ${wordCount} slovíčok.`;
    };

    const playPronunciation = (word) => {
        const audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(word)}&tl=en&client=tw-ob`);
        audio.play();
    };

    const refreshWordList = (filteredWords = words) => {
        const wordListContent = document.getElementById('wordListContent');
        wordListContent.innerHTML = '';
        filteredWords.sort((a, b) => a.english.localeCompare(b.english, 'sk'));
        filteredWords.forEach((word, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${word.english} - ${word.slovak}`;

            // Tlačidlo na prehratie výslovnosti
            const playBtn = document.createElement('span');
            playBtn.innerHTML = '&nbsp;<span style="cursor:pointer; color:blue;">🔊</span>';
            playBtn.onclick = () => playPronunciation(word.english);

            // Tlačidlo na vymazanie
            const deleteBtn = document.createElement('span');
            deleteBtn.innerHTML = '&nbsp;<span style="color:red; font-weight:bold; cursor:pointer;">Vymazať</span>';
            deleteBtn.onclick = async () => {
                words.splice(index, 1);
                await window.api.writeWords(words);
                refreshWordList();
                updateWordCount();
            };

            li.appendChild(playBtn);
            li.appendChild(deleteBtn);
            wordListContent.appendChild(li);
        });
    };

    const displayMessage = (message, type = 'success') => {
        const messageBox = document.getElementById('addMessageBox');
        messageBox.innerHTML = message;
        messageBox.style.color = type === 'success' ? 'green' : 'red';
        setTimeout(() => messageBox.innerHTML = '', 3000);
    };

    document.getElementById('addWordButton').addEventListener('click', async () => {
        const english = document.getElementById('newEnglish').value.trim();
        const slovak = document.getElementById('newSlovak').value.trim();
        if (english && slovak) {
            words.push({ english, slovak });
            await window.api.writeWords(words);
            document.getElementById('newEnglish').value = '';
            document.getElementById('newSlovak').value = '';
            displayMessage('Slovíčko bolo pridané!');
            refreshWordList();
            updateWordCount();
        } else {
            displayMessage('Vyplňte obe polia!', 'error');
        }
    });

    const askNextWord = () => {
        if (words.length === 0) return;
        currentWordIndex = Math.floor(Math.random() * words.length);
        document.getElementById('currentWord').textContent = words[currentWordIndex].slovak;
        document.getElementById('answer').value = '';
        document.getElementById('answer').focus();
    };

    const checkAnswer = () => {
        const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
        const correctAnswer = words[currentWordIndex].english.toLowerCase();
        testStats.total++;

        const resultBox = document.getElementById('result');
        if (userAnswer === correctAnswer) {
            testStats.correct++;
            resultBox.innerHTML = '<span style="color: green;">Správne!</span>';
        } else {
            testStats.incorrect++;
            testStats.wrongWords[words[currentWordIndex].slovak] =
                (testStats.wrongWords[words[currentWordIndex].slovak] || 0) + 1;
            resultBox.innerHTML = `<span style="color: red;">Nesprávne! Správna odpoveď: <b>${correctAnswer}</b></span>`;
        }

        // Prehrať výslovnosť správneho slovíčka
        playPronunciation(words[currentWordIndex].english);

        setTimeout(() => {
            resultBox.innerHTML = '';
            askNextWord();
        }, 2000);
    };

    document.getElementById('answer').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkAnswer();
    });

    document.getElementById('startTest').addEventListener('click', () => {
        if (words.length === 0) {
            displayMessage('Najprv pridajte slovíčka!', 'error');
            return;
        }
        testStats = { total: 0, correct: 0, incorrect: 0, wrongWords: {} };
        document.getElementById('statsBox').innerHTML = ''; // Schovať štatistiku
        askNextWord();
    });

    document.getElementById('stopTest').addEventListener('click', () => {
        const statsBox = document.getElementById('statsBox');

        // TOP 5 nesprávnych slovíčok
        const sortedWrongWords = Object.entries(testStats.wrongWords)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5);

        let wrongWordsList = '';
        sortedWrongWords.forEach(([slovak, count]) => {
            const correctAnswer = words.find(word => word.slovak === slovak)?.english || 'neznámy';
            wrongWordsList += `<li>${slovak} - správne: ${correctAnswer} (${count}x)</li>`;
        });

        statsBox.innerHTML = `
            <p>Test ukončený!</p>
            <p>Celkový počet otázok: ${testStats.total}</p>
            <p>Správne: ${testStats.correct}</p>
            <p>Nesprávne: ${testStats.incorrect}</p>
            ${wrongWordsList ? `<ul>TOP 5 Nesprávne zodpovedané:<br>${wrongWordsList}</ul>` : ''}
        `;
    });

    document.getElementById('exitProgram').addEventListener('click', () => {
        window.close();
    });

    // Opravená funkcia vyhľadávania
    document.getElementById('searchWord').addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        const filteredWords = words.filter(word =>
            word.english.toLowerCase().includes(query) || word.slovak.toLowerCase().includes(query)
        );
        refreshWordList(filteredWords);
    });

    const toggleWordList = () => {
        const wordList = document.getElementById('wordList');
        const toggleButtons = document.querySelectorAll('#toggleWords, #toggleWordsBottom');
        const isHidden = wordList.style.display === 'none';

        wordList.style.display = isHidden ? 'block' : 'none';
        toggleButtons.forEach(btn => btn.textContent = isHidden ? 'Skryť slovíčka' : 'Zobraziť slovíčka');
    };

    document.getElementById('toggleWords').addEventListener('click', toggleWordList);
    document.getElementById('toggleWordsBottom').addEventListener('click', toggleWordList);

    updateWordCount();
    refreshWordList();
});
