import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.setCurrentTime(0);
player.on('play', onPlayTime);
player.on('timeupdate', throttle(onSaveTime, 1000));

function onSaveTime(e) {
  const currentTime = e.seconds;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));

  if (currentTime === e.duration) {
    player.off('timeupdate');
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

function onPlayTime() {
  player.on('timeupdate', throttle(onSaveTime, 1000));
}

const savedPlaybackTime = localStorage.getItem(LOCALSTORAGE_KEY);
const playbackTime = JSON.parse(savedPlaybackTime);
player.setCurrentTime(playbackTime);
