(function($) {

	AOS.init()


	/*----------------------------------------------------
					SLIDE SCRIPTS START
	-----------------------------------------------------*/
	// IMAGE ADD FROM DATA SRC
	$('[data-img-src]').each(function() {
		var Url = $(this).data('img-src');
		$(this).css('background-image', 'url('+Url+')');
	});

	// CUSTOM SLIDE
	const $CustomSlideWrap = $('.fitoutSection .fitout-custom-slide');
	const $CustomSlide = $('.fitoutSection .fitout-custom-slide .slide-item');

	$CustomSlide.each(function(){
		const $ThisSlide = $(this);
		const $NavTitle = $(this).data('slide-nav');
		const $SlideEffect = $(this).data('slide-effect');
		$CustomSlideWrap.find('.slide-item').eq(0).addClass('active');
	});

	function SlideInit(){

		var Delay = $(".fitout-custom-slide").data('autoslide-delay');

		var CurrentSlide = $('.fitout-custom-slide .slide-item.active');
		var NewSlide = CurrentSlide.next();
		TweenMax.set(NewSlide, {scale:1.5});
		TweenMax.set($('.fitout-custom-slide .slide-item'), {opacity:0});
		TweenMax.set(CurrentSlide, {opacity:1});

		setInterval(autoPlay, Delay);

		function autoPlay(){
			var _CurrentSlide = $('.fitout-custom-slide .slide-item.active');
			var _NewSlide = _CurrentSlide.next();

			if(!_NewSlide.length > 0){
				_NewSlide = $('.fitout-custom-slide .slide-item').eq(0);
			}

			var SlideTl = new TimelineMax({onComplete:nextComplete});
			if(_NewSlide.length > 0){

				SlideTl
				.to(_CurrentSlide, 0.5, {y:"-100%", ease: Power3.easeInOut})
				.set(_NewSlide, {opacity:1}, "-=0.5")
				.to(_NewSlide, 0.5, {scale:1, ease: Power3.easeInOut}, "-=0.5")
				.set(_CurrentSlide, {y:"0%"})
				.set(_CurrentSlide, {opacity:0})

			}

			function nextComplete() {
				_CurrentSlide.removeClass('active');
				_NewSlide.addClass('active');

				if(!_NewSlide.length > 0){
					TweenMax.set($('.fitout-custom-slide .slide-item').eq(0), {scale:1.5});
				}else{
					TweenMax.set($('.fitout-custom-slide .slide-item.active').next(), {scale:1.5});
				}
			}

			$('.fitout-custom-slide .slide-item').each(function(index, el) {
				if ($(this).hasClass('active')){
					startIndecar(index);
				}
			});

		}

		var totalCount = $CustomSlide.length;
		$('.fitoutSection .indicator').append('<ul class="count-list">');
		$('.fitoutSection .indicator').append('<span class="total-count">0'+totalCount+'</span>');
		$('.fitoutSection .indicator').append('<span class="slide-progress"><span></span>');

		for (var i = 0; i < totalCount; i++) {
			$('.fitoutSection .indicator .count-list').append('<li>0'+[i + 1]+'</li>');
		}

		$('.fitoutSection .indicator .count-list li').eq(0).addClass('active');


	} SlideInit();

	function startIndecar(i){
		var totalCount = $CustomSlide.length;
		var list = $('.fitoutSection .indicator .count-list li');
		var _CurrentNum = $('.fitoutSection .indicator .count-list li.active');
		var Per = (100 / i);
		$('.fitoutSection .indicator .slide-progress span').css('width', Per+"%");
		var _NewNum = _CurrentNum.next();
		_CurrentNum.removeClass('active');
		_NewNum.addClass('active');

		if(!_NewNum.length > 0){
			$('.fitoutSection .indicator .count-list li').eq(0).addClass('active');
		}
	}



	/*----------------------------------------------------
					SLIDE SCRIPTS END
	-----------------------------------------------------*/


})(jQuery);



// ----------------------slider transition-----------------


// ----------------------slider transition-----------------