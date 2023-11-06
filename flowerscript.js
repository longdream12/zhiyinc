const image = document.getElementById("image");
const clickWord = document.getElementById("click-word");
const videoPopup = document.getElementById("video-popup");
const video = document.getElementById("video");
const closeButton = document.getElementById("close-button");

const imageSources = ["mainlobby.jpg", "gym.jpg", "cafe2.0.jpg", "flowerinsand.jpeg", "engineer.jpeg", "hiking.jpeg", "auditorium.jpg", "draw.jpeg", "plane.jpeg", "sidelobby", "space zero.jpeg", "window.jpeg"]; // Add your image sources here
let currentIndex = 0;

clickWord.addEventListener("click", () => {
    videoPopup.style.display = "block";
    video.play();
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

function changeImage() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    image.src = imageSources[currentIndex];
}

// Change the image every 5 seconds (5000 milliseconds)
setInterval(changeImage, 5000);

// Initially start changing the image
changeImage();
