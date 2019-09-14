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
		//play audio file
		this.currentlyPlaying = $(element).children('audio');
		$(element).children('audio').trigger('play');
		//control progress bar
		// set state
		this.playing = true;
		console.log("playing "+ name);
	},
	pause: function () {
		if (this.playing){
			// stop audio
			this.currentlyPlaying.trigger('pause')
			this.playing = false;
		} else {
			console.log("Nothing's playing!");
		}
	}
}


$('.board-button').click(function () {
	audioPlayer.play(this);
});