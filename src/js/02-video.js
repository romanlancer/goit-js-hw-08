const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
  console.log(currentTime);
});

const playbackTime = localStorage.getItem(LOCALSTORAGE_KEY);
console.log(playbackTime);
player.setCurrentTime(playbackTime);
