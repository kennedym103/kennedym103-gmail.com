const Theme5 = `var theme_defaults = {
		'banner-border': '#000',
		'banner-color-1': '#fff',
		'banner-color-2': '#fff',
		'banner-color-3': '#fff',
		'banner-size-1': '15',
		'banner-size-2': '15',
		'banner-size-3': '15',
		'banner-button-background': '#b0bc26',
		'banner-button-color': '#fff',
		'banner-background': '#000',
		'input-fontname': 'raleway'
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
			image = images.eq(0);
		image.css({
			zIndex: 10
		});
		messages.eq(0).show().css({
			opacity: 0,
			transform: 'translate3d(0, -100%, 0)'
		});

		$(from).animate(to, {
			step: function(now, fx) {
				image.css({
					transform: vertical ? 'translate3d(0, -'+this.n/3+'%, 0)' : 'translate3d(-'+this.n/3+'%, 0, 0)'
				});
				if (this.n > 25 && this.n < 75) {
					messages.eq(0).css({
						transform: vertical ? 'translate3d(0, -'+(this.n - 25)+'%, 0)' : 'translate3d(0, -'+(100-(this.n - 25)*2)+'%, 0)',
						opacity:  (this.n-25)/50
					});
				}
			},
			duration: interval/4,
			//easing: 'linear'
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
				transform: 'translate3d(0, -100%, 0)'
			});

			var from = {n: 0},
				to = {n: 100},
				image = images.eq(1);

			image.hide().css({
				zIndex: 20
			}).fadeIn(interval/8, function() {
				$(from).animate(to ,{
					step: function(now, fx) {
						messages.eq(1).css({
							transform: vertical ? 'translate3d(0, -'+this.n/2+'%, 0)' : 'translate3d(0, -'+(100-this.n)+'%, 0)',
							opacity:  now/100
						});
					},
					duration: interval/12,
					complete: function() {
						button.fadeIn(interval/12);
					}
					//easing: 'linear'
				});
			});


		});

	}

}`;

export default Theme5;
