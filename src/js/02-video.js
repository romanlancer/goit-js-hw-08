import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    const timePlayed = data.percent;
    localStorage.setItem(LOCALSTORAGE_KEY, currentTime);

    if (timePlayed === 0.99) {
      player.off('timeupdate');
      localStorage.removeItem(LOCALSTORAGE_KEY);
    }
  }, 1000),
);

const playbackTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(playbackTime);
