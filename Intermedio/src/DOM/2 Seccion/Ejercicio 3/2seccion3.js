const audioPlayer = document.getElementById('audioPlayer');
const songTitle = document.getElementById('songTitle');
const artist = document.getElementById('artist');
let isBackgroundChanged = false;
const songs = [
    { title: 'Sweet Child O Mine', artist: 'GunsNRoses', src: '../audios/GunsNRoses.mp3', cover: '../imagenes/gunsn.jpeg' },
    { title: 'Locked Out Of Heaven', artist: 'Bruno Mars', src: '../audios/Locked Out Of Heaven.mp3', cover: '../imagenes/bruno.avif' },
    { title: 'I Was Made For Lovin You', artist: 'Kiss', src: '../audios/Kiss  I Was Made For Lovin You.mp3', cover: '../imagenes/kiss.jpg' }
];
const nextSongBtn = document.getElementById('nextSongBtn');
const prevSongBtn = document.getElementById('prevSongBtn');
const coverImg = document.getElementById('coverImg');


nextSongBtn.addEventListener('click', () => nextSong(true));
prevSongBtn.addEventListener('click', () => nextSong(false));


var currentSong;
const setCurrentSong = index => {
    currentSong = songs[index];
    audioPlayer.src = currentSong.src;
    play();
    updateSongInfo();
}

setCurrentSong(0);

function play  (isPlay/** boolean */) {
    (isPlay) ? audioPlayer.play() : audioPlayer.pause()
}
function nextSong(isNext/* boolean */) {
    let indexNextSong = songs.findIndex(s => s == currentSong)
    indexNextSong += isNext ? 1 : -1 ;
    if (isNext && indexNextSong == songs.length) indexNextSong = 0;
    else if(!isNext && indexNextSong == -1) indexNextSong = songs.length - 1;
    setCurrentSong(indexNextSong);
}

function updateSongInfo() {
    songTitle.textContent = currentSong.title;
    artist.textContent = currentSong.artist;
    coverImg.src = currentSong.cover;
}

function updateBackgroundImage() {
    document.body.style.backgroundImage = `url('${currentSong.image}')`;
}
