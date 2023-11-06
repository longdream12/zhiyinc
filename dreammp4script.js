const playButton = document.getElementById("playButton");
const video = document.getElementById("video");

playButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playButton.textContent = "Pause Video";
    } else {
        video.pause();
        playButton.textContent = "Play Video";
    }
});
