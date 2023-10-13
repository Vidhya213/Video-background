const video = document.getElementById("background-video");
const playPauseButton = document.getElementById("play-pause-button");
playPauseButton.addEventListener("click", togglePlayPause);
function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseButton.classList.remove("fa-toggle-on");
    playPauseButton.classList.add("fa-toggle-off");
  } else {
    video.pause();
    playPauseButton.classList.remove("fa-toggle-off");
    playPauseButton.classList.add("fa-toggle-on");
  }
}
