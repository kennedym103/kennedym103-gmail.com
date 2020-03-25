const Theme7 = `var theme_defaults = {
		'banner-border': '#000',
		'banner-color-1': '#fff',
		'banner-color-2': '#fff',
		'banner-color-3': '#fff',
		'banner-size-1': '12',
		'banner-size-2': '12',
		'banner-size-3': '12',
		'banner-button-background': 'none',
		'banner-button-color': '#fff',
		'banner-background': '#000',
		'input-fontname': 'lato'
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
	messages_shape.hide();
	logo.hide();

	step1();

	function step1() {

		if (reset) return;
		button.hide();

		var from = {n: 1.2},
			to = {n: 1},
			from2 = {n: 0},
			to2 = {n: 100},
			image = images.eq(0),
			blur = false;
		image.css({
			zIndex: 10,
			transform: 'scale(1.2)',
			filter: 'blur(0)'
		});
		messages.eq(0).show().css({
			opacity: 0
		});
		messages_shape.hide();


		$(from).animate(to, {
			step: function(now, fx) {
				if (!blur && this.n < 1.15) {
					blur = true;
					image.css({
						filter: 'blur(4px)'
					});
					messages_shape.fadeIn(transition);
					button.fadeIn(transition);
					logo.fadeIn(transition, function() {
						$(from2).animate(to2, {
							step: function(now, fx) {
								messages.eq(0).css({
									opacity: this.n/100
								});
							},
							duration: transition,
							easing: 'linear'
						});
					});


				}
				image.css({
					transform: 'scale('+this.n+')'
				});
			},
			duration: interval,
			easing: 'linear'
		});



		theme_timeout = setTimeout(function(){
			if (!reset) raf(step2)
		}, interval - 2*transition);
	}

	function step2() {
		if (reset) return;

		var from = {n: 1.2},
			to = {n: 1},
			from2 = {n: 0},
			to2 = {n: 100},
			image = images.eq(1),
			blur = false;

		messages.eq(1).show().css({
			opacity: 0
		});

		messages.eq(0).fadeOut(transition, function(){

			image.hide().css({
				zIndex: 20,
				transform: 'scale(1.2)',
				filter: 'blur(0)'
			}).fadeIn(transition, function() {});

			messages_shape.fadeOut(transition);

			$(from).animate(to ,{
				step: function(now, fx) {
					if (!blur && this.n < 1.1) {
						blur = true;
						image.css({
							filter: 'blur(4px)'
						});

						messages_shape.fadeIn(transition, function() {
							$(from2).animate(to2 ,{
								step: function(now, fx) {
									messages.eq(1).css({
										opacity:  now/100
									});
								},
								duration: transition,
								//easing: 'linear'
							});
						});

					}
					image.css({
						transform: 'scale('+this.n+')'
					});
				},
				duration: interval - transition,
				easing: 'linear',
				complete: function() {
					button.fadeIn(interval/12);
					if (typeof PLAY != 'undefined' && PLAY) PLAY.fadeIn(200);
				}
			});


		});

	}

}`;

export default Theme7;
