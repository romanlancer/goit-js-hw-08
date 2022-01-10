const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (data) {
	const currentTime = data.duration;

	console.log(currentTime);
	console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
	console.log('title:', title);
});
