const audioPlayer = document.getElementById('audioPlayer');
const songTitle = document.getElementById('songTitle');
const artist = document.getElementById('artist');
let currentSongIndex = 0;
let isBackgroundChanged = false;
const songs = [
    { title: 'Sweet Child O Mine', artist: 'GunsNRoses', src: 'audios/GunsNRoses.mp3' },
    { title: 'Locked Out Of Heaven', artist: 'Bruno Mars', src: 'audios/Locked Out Of Heaven.mp3' }
];

function play() {
    audioPlayer.play();
    updateSongInfo();
}

function pause() {
    audioPlayer.pause(); 
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex].src;
    audioPlayer.play();
    updateSongInfo();
}

function updateSongInfo() {
    songTitle.textContent = songs[currentSongIndex].title;
    artist.textContent = songs[currentSongIndex].artist;
}

function updateBackgroundImage() {
    document.body.style.backgroundImage = `url('${songs[currentSongIndex].image}')`;
}



