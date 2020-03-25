const Theme2 = `var theme_defaults = {
		'banner-border': '#005172',
		'banner-color-1': '#fff',
		'banner-color-2': '#fff',
		'banner-color-3': '#fff',
		'banner-size-1': '22',
		'banner-size-2': '22',
		'banner-size-3': '22',
		'banner-button-background': '#6fd4e4',
		'banner-button-color': '#005172',
		'input-fontname': 'lato'
	},
	reset = true, theme_timeout = false,
	frames = 3;

function theme() {

	reset = false;

	var fadespeed = 8,
		transition = interval / fadespeed;

	images.eq(0).css({zIndex:0});
	images.eq(1).css({zIndex:1});
	images.eq(2).css({zIndex:2});
	button.hide();
	messages.eq(2).hide();

	step1();

	function step1() {

		if (reset) return;

		banner.attr('data-step', 1);

		button.hide();

		messages_shape.css({
			height: 0,
			opacity: 1
		}).show().animate({
			height: '100%'
		}, transition)
		messages.eq(0).css({
			opacity: 0,
			left: 10
		}).show().animate({
			opacity: 1,
			left: 0
		}, transition);

		var from = {n: 1.1},
			to = {n: 1},
			image = images.eq(0);
		image.css({
			zIndex: 10,
			transform: 'scale(1.1)',
			opacity: 1
		});
		$(from).animate(to , {
			step: function(now, fx) {
				image.css({
			  		transform: 'scale('+this.n+')',
			  		//opacity: (1.2 - now) * 5 * fadespeed
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


		messages.eq(0).add(messages_shape).fadeOut(transition, function(){

			banner.attr('data-step', 2);

			messages_shape.css({
				height: 0,
				opacity: 1
			}).show().animate({
				height: '100%'
			}, transition);
			messages.eq(1).css({
				opacity: 0,
				left: 10
			}).show().animate({
				opacity: 1,
				left: 0
			}, transition);

		});
		var from = {n:1},
			to = {n:1.1},
			image = images.eq(1);
		image.css({
			zIndex: 20,
			transform: 'scale(1)',
			opacity: 0
		});
		$(from).animate(to, {
			step: function(now, fx) {
				image.css({
			  		transform: 'scale('+this.n+')',
			  		opacity: (now - 1) * 5 * fadespeed
				});
			},
			duration: interval,
			easing: 'linear'
		});

		theme_timeout = setTimeout(function(){
			if (!reset) raf(step3)
		}, interval - (2 * transition));
	}

	function step3() {
		if (reset) return;

		messages_shape.add(messages.eq(1)).fadeOut(transition, function(){

			banner.attr('data-step', 3);
			button.fadeIn(transition);
			messages_shape.css({
				height: 0,
				opacity: 1
			}).show().animate({
				height: '100%'
			}, transition);
			messages.eq(2).css({
				opacity: 0,
				left: 10
			}).show().animate({
				opacity: 1,
				left: 0
			}, transition);
		});
		var from = {n:1.1},
			to = {n:1},
			image = images.eq(2);
		image.css({
			zIndex: 30,
			transform: 'scale(1.1)',
			opacity: 0
		});
		$(from).animate(to ,{
			step: function(now, fx) {
				image.css({
			  		transform: 'scale('+this.n+')',
			  		opacity:  (1.2 - now) * 5 * fadespeed
				});
			},
			duration: interval,
			easing: 'linear',
			complete: function() {
				if (typeof PLAY != 'undefined' && PLAY) PLAY.fadeIn();
			}
		});
	}

}`;

export default Theme2;
