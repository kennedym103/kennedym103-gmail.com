const Theme1 =`
var theme_defaults = {
  		'banner-border': '#4e3a24',
  		'banner-color-1': '#4e3a24',
  		'banner-color-2': '#4e3a24',
  		'banner-color-3': '#4e3a24',
  		'banner-size-1': '16',
  		'banner-size-2': '16',
  		'banner-size-3': '16',
  		'banner-button-background': '#4e3a24',
  		'banner-button-color': '#fff',
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

  		messages.eq(0).fadeIn(transition);

  		var from = {n: -40},
  			to = {n: 0},
  			image = images.eq(0);
  		image.css({
  			zIndex: 10,
  			transform: 'translate(0,-40px)',
  			opacity: 1
  		});
  		$(from).animate(to , {
  			step: function(now, fx) {
  				image.css({
  			  		transform: 'translate(0,'+this.n+'px)',
  			  		//opacity: fadespeed * (40 + now)/40
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

  		messages.eq(0).fadeOut(transition, function(){
  			banner.attr('data-step', 2);
  			messages.eq(1).fadeIn(transition);
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
  			  		opacity: (now - 1) * 2.5 * fadespeed
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



  		messages.eq(1).fadeOut(transition, function(){
  			banner.attr('data-step', 3);
  			button.fadeIn(transition);
  			messages.eq(2).fadeIn(transition);
  		});
  		var from = {n:1.3},
  			to = {n:1},
  			image = images.eq(2);
  		image.css({
  			zIndex: 30,
  			transform: 'scale(1.3)',
  			opacity: 0
  		});
  		$(from).animate(to ,{
  			step: function(now, fx) {
  				image.css({
  			  		transform: 'scale('+this.n+')',
  			  		opacity:  (1.4 - now) * 2.5 * fadespeed
  				});
  			},
  			duration: interval,
  			easing: 'linear',
  			complete: function() {
  				if (typeof PLAY != 'undefined' && PLAY) PLAY.fadeIn();
  			}
  		});
  	}
  };`;

export default Theme1;
