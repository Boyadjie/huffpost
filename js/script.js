// Toggle Icone hamburger
    $(document).ready(function(){
        $('.click').click(function(){
            $('.click').toggleClass('active');
			document.getElementById(".click");
        })
    })

var $hamburger = $('.click');

	var hamburgerMotion = new TimelineMax()
	.to(".ombre", 0, {height: '100%',ease: Expo.easeInOut,})
	.to(".menu", 1.2, {top: '2%',ease: Expo.easeInOut,})
	.reverse()

	$hamburger.on('click', function(e) {
  		hamburgerMotion.reversed(!hamburgerMotion.reversed());
	});