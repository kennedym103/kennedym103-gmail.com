const Engine = `
var raf = window.requestAnimationFrame,
	interval = $('meta[name="ad.speed"]').attr('content')*1,
	stop = false;

setTimeout(function(){
	stop = true;
}, 30000-interval);

// BANNER ENGINE

var banner,
	banner_shape,
	images_wrapper,
	images,
	total_images,
	messages_wrapper,
	messages_shape,
	messages,
	logo,
	button,
	current_image = 0, zindex = 10,
	raf = window.requestAnimationFrame,
	size, vertical,
	adVisible = pageLoaded = jQueryReady = $.Deferred();

$(function() {
	banner = $('#banner');
	banner_shape = $('.banner-shape', banner);
	images_wrapper = $('.banner-images', banner);
	images = $('.banner-image', images_wrapper);
	total_images = images.length;
	messages_wrapper = $('.banner-messages', banner);
	messages_shape = $('.banner-messages-shape', banner);
	messages = $('.banner-message', banner);
	logo = $('.banner-logo', banner);
	button = $('.banner-button', banner);
	current_image = 0, zindex = 10;

	jQueryReady.resolve();
})

/* ENABLER */


	if (!Enabler.isInitialized()) {
		Enabler.addEventListener(
			studio.events.StudioEvent.INIT,
			enablerInitialized
		);
	} else {
		enablerInitialized();
	}

	$.when(pageLoaded, adVisible, jQueryReady).done(function(){
		document.getElementById('bg-exit1').addEventListener('click', bgExitHandler1, false);
		document.getElementById('bg-exit2').addEventListener('click', bgExitHandler2, false);
		theme();
	});

function enablerInitialized() {
	if (!Enabler.isVisible()) {
		Enabler.addEventListener(
			studio.events.StudioEvent.VISIBLE, function() {
				adVisible.resolve();
			}
		);
	} else {
		adVisible.resolve();
	}

}
function adVisible() {
	if (Enabler.isPageLoaded()) {
		pageLoaded.resolve();
	} else {
		Enabler.addEventListener(
			studio.events.StudioEvent.PAGE_LOADED, function() {
				pageLoaded.resolve();
			}
		);
  }
}

function bgExitHandler1(e) {
	Enabler.exitOverride('Background Exit', window.exitURL);
}
function bgExitHandler2(e) {
	Enabler.exitOverride('Button Exit', window.exitURL);
};`;

export default Engine;
