const song = document.getElementById("song");
const playBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".play-forward");
const prevBtn = document.querySelector(".play-back");
let isPlaying = true;
let indexSong = 0;
const musics = ["music1.mp3", "music2.mp3", "music3.mp3", "music1.mp3"];
song.setAttribute("src", `./music/${musics[indexSong]}`);
nextBtn.addEventListener("click", function () {
  changeSong(1);
});
prevBtn.addEventListener("click", function () {
  changeSong(-1);
});
function changeSong(dir) {
  if (dir === 1) {
    indexSong++;

    if (indexSong >= musics.length) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if (dir === -1) {
    indexSong--;
    if (indexSong < 0) {
      indexSong = musics.length - 1;
    }
    isPlaying = true;
  }

  song.setAttribute("src", `./music/${musics[indexSong]}`);
  playPause();
}
playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    song.play();
    playBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
    isPlaying = false;
  } else {
    song.pause();
    playBtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
    isPlaying = true;
  }
}

function change() {
  document.getElementById("bd").style.backgroundImage = "url(img/nen1.jpg)";
}
function change1() {
  document.getElementById("bd").style.backgroundImage = "url(img/nen2.jpg)"
}
function change2() {
  document.getElementById("bd").style.backgroundImage = "url(img/nen3.jpg)"
}