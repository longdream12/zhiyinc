const wordList = ["Bruh stop looking at your phone!", "focus! We are having a tournament! We have to win!", "OMG you know what happen that day?!", "Wait wait we gotta be humble!"]; // Words to display
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

setInterval(createRandomWord, 2000); // Change the interval to control the speed (in milliseconds)

const image = document.getElementById("image");
const videoPopup = document.getElementById("video-popup");
const video = document.getElementById("video");
const closeButton = document.getElementById("close-button");

image.addEventListener("click", () => {
    videoPopup.style.display = "block";
});

closeButton.addEventListener("click", () => {
    videoPopup.style.display = "none";
    video.pause();
});

window.addEventListener("click", (event) => {
    if (event.target === videoPopup) {
        videoPopup.style.display = "none";
        video.pause();
    }
});


