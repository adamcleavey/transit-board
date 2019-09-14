// audioplayer
let audioPlayer = {
	playing: false,
	currentlyPlaying: null,
	progressIndicator: null,
	resetProgress: function () {
		$('.progress').css('width', '0% !important');
	},
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
		};
		//play audio file
		this.currentlyPlaying = $(element).children('audio');
		$(element).children('audio').trigger('play');
		//control progress bar
		var progress = $(element).children('.progress');
		this.currentlyPlaying.on('timeupdate', function() {
			var percent = (this.currentTime/this.duration)*100;
			progress.css("width", percent + "%");
		});
		this.progressIndicator = progress;
		// set state
		this.playing = true;
		console.log("playing "+ name);
	},
	pause: function (name) {
		if (this.playing){
			// stop audio
			this.currentlyPlaying.trigger('pause')
			this.playing = false;
			console.log('pausing, resetting progress');
			this.resetProgress();
		} else {
			console.log("Nothing's playing!");
		}
	}
}

// button handler
$('.board-button').click(function () {
	$('.progress').css('width', '0%');
	audioPlayer.play(this);
});

window.audioPlayer = audioPlayer;