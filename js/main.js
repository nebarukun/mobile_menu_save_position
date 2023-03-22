$(document).ready(function() {

	let lastScrollPos = 0;

	$(document).on('click', '#mobile-btn', function(){

		if($('body').hasClass('nav-open')){

			$('body').removeClass('nav-open');
			$('#wrap').css('top','');

      // GO TO THE LAST SAVED POSITION
			setTimeout(function(){
				$('html,body').scrollTop(lastScrollPos);
			},10)

		} else {
      // SAVE CURRENT POSITION
			lastScrollPos = $(window).scrollTop();

			$('#wrap').css('top',-lastScrollPos);
			$('html,body').scrollTop(0);
			$('body').addClass('nav-open');
		}
	});

});
