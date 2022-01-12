import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('play', onPlayTime);
player.on('timeupdate', throttle(onSaveTime, 1000));

function onSaveTime(e) {
  const currentTime = e.seconds;
  // const timePlayed = e.percent
  localStorage.setItem(LOCALSTORAGE_KEY, currentTime);

  if (currentTime === e.duration) {
    player.off('timeupdate');
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

function onPlayTime() {
  player.on('timeupdate', throttle(onSaveTime, 1000));
}

const playbackTime = localStorage.getItem(LOCALSTORAGE_KEY);
player.setCurrentTime(playbackTime);
