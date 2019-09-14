// load audio files

//const mexicocity = document.getElementById('mexicocity-audio');
//const montreal = document.getElementById('montreal-audio');

//audioplayer
let audioPlayer = {
	playing: false,
	currentlyPlaying: null,
	play: function (element) {
		//get and save name
		var name = $(element).attr('id')
		//pause audio if active
		this.pause(name);
		// if its the same one as previously active, stop it.
		if (this.currentlyPlaying) {
			console.log(this.currentlyPlaying.attr('id'));
			if (this.currentlyPlaying.attr('id')===name+'-audio') {
				console.log('same audio, stopping')
				this.playing = false;
				this.currentlyPlaying = null;
				return;
			}
		}
		//play audio file
		this.currentlyPlaying = $(element).children('audio');
		$(element).children('audio').trigger('play');
		//control progress bar
		// set state
		this.playing = true;
		console.log("playing "+ name);
	},
	pause: function (name) {
		if (this.playing){
			// stop audio
			this.currentlyPlaying.trigger('pause')
			this.playing = false;
		} else {
			console.log("Nothing's playing!");
		}
	}
}

// button handler
$('.board-button').click(function () {
	audioPlayer.play(this);
});

window.audioPlayer = audioPlayer;