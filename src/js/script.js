$(document).ready(function(){
	// menu click event
	$('.menuBtn').click(function() {
		$(this).toggleClass('act');
			if($(this).hasClass('act')) {
				$('.mainMenu').addClass('act');
			}
			else {
				$('.mainMenu').removeClass('act');
			}
	});

	$('.mainMenu__link').click(function() {
		$('.menuBtn').removeClass('act');
		$('.mainMenu').removeClass('act');
	});
});