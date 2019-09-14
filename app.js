// load audio files

//const mexicocity = document.getElementById('mexicocity-audio');
//const montreal = document.getElementById('montreal-audio');

//audioplayer
let audioPlayer = {
	playing: false,
	currentlyPlaying: null,
	play: function (element) {
		//pause audio if active
		this.pause();
		//get audio file
		var name = $(element).attr('id')
		var audio = 
		//play audio file
		//control progress bar
		this.playing = true;
		console.log("playing!");
		

	},
	pause: function () {
		if (this.playing){
			// stop audio
			this.playing = false;
		} else {
			console.log("Nothing's playing!");
		}
	}
}


$('.board-button').click(function () {
	audioPlayer.play(this);
});