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


