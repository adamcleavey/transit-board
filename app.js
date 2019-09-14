// load audio files

//const mexicocity = document.getElementById('mexicocity-audio');
//const montreal = document.getElementById('montreal-audio');

//audioplayer
let audioPlayer = {
	playing: false,
	currentlyPlaying: null,
	play: function () {
		currentlyPlaying = true;
		console.log("playing!");
	},
	pause: function () {
		if (currentlyPlaying){
			
		} else {
			console.log("Nothing's playing!");
		}
	}
}


$('.board-button').click(function () {
	audioPlayer.play();
});