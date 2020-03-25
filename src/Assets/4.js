const Theme4 = `var theme_defaults = {
		'banner-border': '#000',
		'banner-color-1': '#fff',
		'banner-color-2': '#fff',
		'banner-color-3': '#fff',
		'banner-size-1': '15',
		'banner-size-2': '15',
		'banner-size-3': '15',
		'banner-button-background': '#000',
		'banner-button-color': '#fff',
		'banner-background': '#1b649b',
		'input-fontname': 'muli'
	},
	reset = true, theme_timeout = false,
	vertical = false,
	frames = 2;

function theme() {

	reset = false;

	var fadespeed = 8,
		transition = interval / fadespeed;

	vertical = size == "728x90" || size == "320x50" || size == "468x60";


	images.eq(0).css({zIndex:0});
	images.eq(1).css({zIndex:1});
	images.eq(2).css({zIndex:2});
	button.hide();
	messages.hide();
	logo.hide();

	step1();

	function step1() {

		if (reset) return;
		button.hide();

		var from = {n: 40},
			to = {n: 0},
			image = images.eq(0);
		image.css({
			zIndex: 10
		});
		messages.eq(0).show().css({
			opacity: 0,
			transform: 'translate(0, calc(-50% - 40px))'
		});
		button.show().css({
			opacity: 0,
			transform: 'translate(0, 40px)'
		});
		logo.hide().fadeIn(interval/6, function() {
			$(from).animate(to, {
				step: function(now, fx) {
					messages.eq(0).css({
						transform: 'translate(0, calc(-50% - '+this.n+'px))',
						opacity:  (40 + now)/40
					});
				},
				duration: interval/12,
				easing: 'linear',
				complete: function() {
					from = {n: 40};
					$(from).animate(to, {
						step: function(now, fx) {
							button.css({
								transform: 'translate(0, '+this.n+'px)',
								opacity:  (40 + now)/40
							});
						},
						duration: interval/12,
						easing: 'linear',
						complete: function() {
							button.css({
								transform: 'none'
							});
						}
					});
				}
			});
		});

		theme_timeout = setTimeout(function(){
			if (!reset) raf(step2)
		}, interval - (2 * transition));
	}

	function step2() {
		if (reset) return;
		messages.eq(0).fadeOut(transition, function(){

			messages.eq(1).show().css({
				opacity: 0,
				transform: 'translate(0, calc(-50% - 40px))'
			});

			var from = {n: 40},
				to = {n: 0},
				image = images.eq(1);

			image.hide().css({
				zIndex: 20
			}).fadeIn(interval/6);
			$(from).animate(to ,{
				step: function(now, fx) {
					messages.eq(1).css({
						transform: 'translate(0, calc(-50% - '+this.n+'px))',
						opacity:  (40 + now)/40
					});
				},
				duration: interval/12,
				easing: 'linear',
				complete: function() {
					if (typeof PLAY != 'undefined' && PLAY) PLAY.fadeIn(200);
				}
			});

		});

	}

}`;

export default Theme4;
