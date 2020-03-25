const Theme6 = `var theme_defaults = {
		'banner-border': '#000',
		'banner-color-1': '#fff',
		'banner-color-2': '#fff',
		'banner-color-3': '#fff',
		'banner-size-1': '26',
		'banner-size-2': '26',
		'banner-size-3': '26',
		'banner-button-background': 'none',
		'banner-button-color': '#fff',
		'banner-background': '#364c6e',
		'input-fontname': 'pathway'
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
	logo.show();

	step1();

	function step1() {

		if (reset) return;
		button.hide();

		var from = {n: 0},
			to = {n: 100},
			from2 = {n: 0},
			to2 = {n: 100},
			image = images.eq(0);
		image.css({
			zIndex: 10,
			transform: 'translate3d(0, 0, 0)'
		});
		messages.eq(0).show().css({
			opacity: 0
		});

		messages_shape.css(vertical ? {
			opacity: 0,
			width: '80%'
		} : {
			opacity: 0,
			height: '80%'
		}).animate(vertical ? {
			opacity: .45,
			width: '100%'
		} : {
			opacity: .45,
			height: '100%'
		}, transition, function(){
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

		$(from).animate(to, {
			step: function(now, fx) {
				image.css({
					transform: vertical ? 'translate3d(0, '+this.n/3+'%, 0)' : 'translate3d(-'+this.n/3+'%, 0, 0)'
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

		var from = {n: 0},
			to = {n: 100},
			from2 = {n: 0},
			to2 = {n: 100},
			image = images.eq(1);

		messages.eq(1).show().css({
			opacity: 0
		});

		messages.eq(0).fadeOut(transition, function(){

			image.hide().css({
				zIndex: 20,
				transform: 'translate3d(0, 0, 0)'
			}).fadeIn(transition, function() {
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

			$(from).animate(to ,{
				step: function(now, fx) {
					image.css({
						transform: vertical ? 'translate3d(0, -'+this.n/3+'%, 0)' : 'translate3d('+this.n/3+'%, 0, 0)'
					});
				},
				duration: interval - transition,
				easing: 'linear'
			});


		});

		theme_timeout = setTimeout(function(){
			if (!reset) raf(step3)
		}, interval - 2*transition);

	}

	function step3() {
		if (reset) return;

		var from = {n: 0},
			to = {n: 100},
			from2 = {n: 0},
			to2 = {n: 100},
			image = images.eq(2);

		messages.eq(1).fadeOut(transition, function(){

			messages.eq(2).show().css({
				opacity: 0
			});

			image.hide().css({
				zIndex: 30,
				transform: 'translate3d(0, 0, 0)'
			}).fadeIn(transition, function(){
				$(from2).animate(to2 ,{
					step: function(now, fx) {
						messages.eq(2).css({
							opacity:  now/100
						});
					},
					duration: transition,
					//easing: 'linear'
				});
			});



			$(from).animate(to ,{
				step: function(now, fx) {
					image.css({
						transform: vertical ? 'translate3d(0, '+this.n/3+'%, 0)' : 'translate3d(-'+this.n/3+'%, 0, 0)'
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

export default Theme6;
