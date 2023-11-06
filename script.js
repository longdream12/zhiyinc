const wordList = ["laughs", "gossips", "complains", "cries"]; 
const body = document.body;

function getRandomPosition() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
}

function createRandomWord() {
    const randomPosition = getRandomPosition();
    const word = document.createElement("div");
    word.className = "word";
    word.style.left = `${randomPosition.x}px`;
    word.style.top = `${randomPosition.y}px`;
    word.textContent = wordList[Math.floor(Math.random() * wordList.length)];
    body.appendChild(word);
}

setInterval(createRandomWord, 1000); 