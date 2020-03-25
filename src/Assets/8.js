const Theme8 = `var theme_defaults = {
		'banner-border': '#000',
		'banner-color-1': '#fff',
		'banner-color-2': '#fff',
		'banner-color-3': '#fff',
		'banner-size-1': '12',
		'banner-size-2': '12',
		'banner-size-3': '12',
		'banner-button-background': '#000',
		'banner-button-color': '#fff',
		'banner-background': '#fff',
		'banner-shape': '#000',
		'input-fontname': ''
	},
	reset = true, theme_timeout = false,
	vertical = false,
	frames = 3;

function theme() {

	reset = false;

	var fadespeed = 8,
		transition = interval / fadespeed;

	vertical = size == "728x90" || size == "320x50" || size == "468x60";

	step1();

	function step1() {

		if (reset) return;

		images.hide();
		button.hide();
		messages.hide();
		messages_shape.hide();
		messages_wrapper.hide();
		banner_shape.hide();
		logo.hide();

		banner.attr('data-step', 1);

		var image = images.eq(0);

		image.fadeIn(transition, function() {
			banner.attr('data-step', 2);
			banner_shape.fadeIn(transition);
			logo.fadeIn(transition, function() {
				banner.attr('data-step', 3);
				messages.eq(0).show();
				messages_wrapper.fadeIn(transition);
			});
		});


		theme_timeout = setTimeout(function(){
			if (!reset) raf(step2)
		}, interval);
	}

	function step2() {
		if (reset) return;

		var image = images.eq(1);

		image.fadeIn(transition, function() {
			banner_shape.hide();
			banner.attr('data-step', 4);
			banner_shape.fadeIn(transition);
			logo.hide().fadeIn(transition, function() {
				messages_wrapper.hide();
				messages.hide();
				banner.attr('data-step', 5);
				messages.eq(1).show();
				messages_wrapper.fadeIn(transition);
			});
		});


		theme_timeout = setTimeout(function(){
			if (!reset) raf(step3)
		}, interval);

	}

	function step3() {
		if (reset) return;

		var image = images.eq(2);

		button.hide();

		image.show();
		banner_shape.fadeOut();
		logo.fadeOut();
		messages_wrapper.fadeOut(function() {
			banner_shape.hide();
			banner.attr('data-step', 6);
			banner_shape.hide().fadeIn(transition);
			logo.hide().fadeIn(transition, function() {
				banner.attr('data-step', 7);
				messages.hide().eq(2).show();
				messages_wrapper.fadeIn(transition, function() {
					button.fadeIn(interval/12);
					if (typeof PLAY != 'undefined' && PLAY) PLAY.fadeIn(200);

				});
			});
		});

	}

}`;

export default Theme8;
