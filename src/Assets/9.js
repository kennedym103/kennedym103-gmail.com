const Theme9 = `var theme_defaults = {
    'banner-border': '#faaf43',
    'banner-color-1': '#fff',
    'banner-color-2': '#fff',
    'banner-color-3': '#fff',
    'banner-size-1': '12',
    'banner-size-2': '12',
    'banner-size-3': '12',
    'banner-button-background': '#faaf43',
    'banner-button-color': '#fff',
    'banner-background': '#fff',
    'banner-shape': '#0e1e3f',
    'input-fontname': 'josefin'
  },
  reset = true,
  theme_timeout = false,
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

    images_wrapper.hide();
    images.hide();
    button.hide();
    messages.hide();
    messages_shape.hide();
    messages_wrapper.hide();
    banner_shape.hide();
    logo.show();

    banner.attr('data-step', 1);

    logo.delay(interval / 4).fadeOut(transition, function() {
      banner.attr('data-step', 2);
      images_wrapper.show();
      messages_wrapper.show();
      var from = {
          n: 0
        },
        to = {
          n: 100
        },
        image1 = images.eq(0),
        image2 = images.eq(1);
				image3 = images.eq(2);

      image1.fadeIn(transition);
      image2.fadeIn(transition);

      $(from).animate(to, {
        step: function(now, fx) {
          image1.css({
            transform: vertical ? 'translate3d(0, -' + (100 - this.n) / 3 + '%, 0)' : 'translate3d(-' + (100 - this.n) / 3 + '%, 0, 0)'
          });
          image2.css({
            transform: vertical ? 'translate3d(0, -' + this.n / 3 + '%, 0)' : 'translate3d(-' + this.n / 3 + '%, 0, 0)'
          });
        },
        duration: interval * 2 - transition,
        //easing: 'linear'
      });

      messages.eq(0).fadeIn(transition, function() {
        $(this).delay(interval / 2).fadeOut(transition, function() {
          messages.eq(1).fadeIn(transition);
        });

      });
    });


    theme_timeout = setTimeout(function() {
      if (!reset) raf(step2);
			image3.fadeIn(transition);
    }, interval * 2 - transition * 2);
  }

  function step2() {
    if (reset) return;

    var from = {
        n: 1.2
      },
      to = {
        n: 1
      },
      image = images.eq(2);

    messages.hide().eq(2).show();
    messages_wrapper.hide()

    image.css({
      zIndex: 8000,
      transform: 'scale(1.2)'
    });

    image.fadeIn(transition, function() {
      banner.attr('data-step', 4);

      logo.fadeIn(transition, function() {
        button.fadeIn(transition);
        messages_wrapper.fadeIn(transition);
      });
    });

    $(from).animate(to, {
      step: function(now, fx) {
        image.css({
          transform: 'scale(' + this.n + ')'
        });
      },
      duration: interval,
      easing: 'linear'
    });

    theme_timeout = setTimeout(function() {
      if (typeof PLAY != 'undefined' && PLAY) PLAY.fadeIn(1000);
    }, interval);

  }

}`;

export default Theme9;
