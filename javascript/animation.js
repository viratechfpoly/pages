var windowH = window.innerHeight;
var timeOutRun = false;
var lastScrollTop = 0;
var timeOut = 0;
var timeOurRange = 200;
var myTimeOut = 0;
var goUp = false;
firstLoad(); 

$(window).on('scroll', function () {
	var scrollTop = $(this).scrollTop() + windowH - 80;	
	handleShowHide(scrollTop);	
});


function firstLoad() {
	var scrollTop = document.documentElement.scrollTop + windowH;
	handleShowHide(scrollTop);
}

function handleShowHide(scrollTop) {	
	$('.fade-in-left, .fade-on-up').each(function () {		
		var topDistance = $(this).offset().top;
		if (scrollTop > lastScrollTop) {
			goUp = false;			
			if (scrollTop > topDistance && !$(this).hasClass('show')) {
				if (!timeOutRun) {				
					timeOutRun = true;		
					$(this).addClass('show');										
				} else {					
					timeOut += timeOurRange;
					setTimeout(() => {																							
						if (!goUp && !$(this).hasClass('show')) {
							$(this).addClass('show');
							timeOutRun = false;
							timeOut = 0;
						}
					}, timeOut);					
				}
			} 		
		} else {				
			goUp = true;
			if (scrollTop - 300 < topDistance && $(this).hasClass('show')) {							
				$(this).removeClass('show');
			}
		}						
	});	

	lastScrollTop = scrollTop;		
}