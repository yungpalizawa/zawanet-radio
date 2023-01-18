const musicContainer = document.getElementById('music-player');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');



const songs = [
    'Free Madness',
    'African Queen',
    'Temptation Remix',
    'Soty-Malaria'
];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
  audio.src = `OLD_SCHOOL_RADIO/music/${song}.mp3`;
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fa').classList.remove('fa-play');
    playBtn.querySelector('i.fa').classList.add('fa-pause');
  
    audio.play();
  }


  function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fa').classList.add('fa-play');
    playBtn.querySelector('i.fa').classList.remove('fa-pause');
  
    audio.pause();
  }


prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


function prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}


function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }
  
  audio.addEventListener('ended', nextSong);
