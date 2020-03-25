const Theme3 = `var theme_defaults = {
		'banner-border': '#000',
		'banner-color-1': '#000',
		'banner-color-2': '#000',
		'banner-color-3': '#000',
		'banner-size-1': '20',
		'banner-size-2': '20',
		'banner-size-3': '20',
		'banner-button-background': '#000',
		'banner-button-color': '#fff',
		'input-fontname': 'muli'
	},
	reset = true, theme_timeout = false,
	vertical = false,
	frames = 3;

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

	step1();

	function step1() {

		if (reset) return;
		banner.attr('data-step', 1);
		button.hide();

		messages.eq(0).delay(transition).fadeIn(transition);

		var from = {n: -50},
			to = {n: 0},
			image = images.eq(0);
		image.css({
			zIndex: 10,
			transform: vertical ? 'translate(0, 50%)' : 'translate(-50%,0)'
		});
		$(from).animate(to , {
			step: function(now, fx) {
				image.css({
			  		transform: vertical ? 'translate(0, '+(-this.n)+'%)' : 'translate('+this.n+'%, 0)'
				});
			},
			duration: interval,
			easing: 'linear'
		});

		theme_timeout = setTimeout(function(){
			if (!reset) raf(step2)
		}, interval - (2 * transition));
	}

	function step2() {
		if (reset) return;
		var from = {n: 0},
			to = {n: -50},
			image = images.eq(1);

		messages.eq(0).fadeOut(transition, function(){
			banner.attr('data-step', 2);
			messages.eq(1).fadeIn(transition);

			image.css({
				zIndex: 20,
				transform: 'translate(50%, 0)'
			});
			$(from).animate(to, {
				step: function(now, fx) {
					image.css({
						transform: 'translate('+this.n+'%,0)'
					});
				},
				duration: interval,
				easing: 'linear'
			});
		});

		theme_timeout = setTimeout(function(){
			if (!reset) raf(step3)
		}, interval - (2 * transition));
	}

	function step3() {
		if (reset) return;
		messages.eq(1).fadeOut(transition, function(){
			banner.attr('data-step', 3);
			button.fadeIn(transition);
			messages.eq(2).fadeIn(transition);
		});
		var from = {n:1.4},
			to = {n:1};
		$(from).animate(to ,{
			step: function(now, fx) {

			},
			duration: interval,
			easing: 'linear',
			complete: function() {
				if (typeof PLAY != 'undefined' && PLAY) PLAY.fadeIn(200);
			}
		});
	}

}`;

export default Theme3;
