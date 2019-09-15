// audioplayer
let audioPlayer = {
	playing: false,
	currentlyPlaying: null,
	progressIndicator: null,
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
				$(element).removeClass('active')
				this.playing = false;
				this.currentlyPlaying = null;
				return;
			}
		};
		//play audio file
		this.currentlyPlaying = $(element).children('audio');
		$(element).children('audio').trigger('play');
		//control progress bar
		$(element).addClass('active');
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
			$('.board-button.active').removeClass('.active');
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