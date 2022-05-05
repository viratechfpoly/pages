$('.control-item').click(function (e) {
	e.preventDefault();
	var lastControl = $('.control-item.active');
	var lastItem = $('.products-slide-fade').children('.active');
	var next = $(this).attr('data-image');
	var nextActive = $(`[data-image=${next}]`);

	lastControl.removeClass('active');
	$(this).addClass('active');
	lastItem.removeClass('active');
	lastItem.addClass('last-item');

	nextActive.addClass('active');

	setTimeout(() => {
		lastItem.removeClass('last-item');
	}, 300);
	handlePositionLine(lastControl);
});

// Fix when reposive
var faWidthControlSlide = 620;
var widthControlSlide = 550;
var distanceControlSlide = (faWidthControlSlide - widthControlSlide) / 2;
var widthControlItem = 90;
var margin = 10;
var distanceLeftRight = widthControlItem + margin * 2;
var lineElement = $('.product-thumbs-indicator');
var activeControl = $('.control-item.active');
var timeDistanceLeftRight = 50;
handlePositionLine(activeControl);

function handlePositionLine(lastControl) {
	lastControl = lastControl.attr('data-image');
	var activeControl = $('.control-item.active').attr('data-image');
	if (activeControl > 1) {
		var indexLeft = activeControl - 1;
		var left = margin + distanceLeftRight * indexLeft;
		var right = widthControlSlide + margin - distanceLeftRight * activeControl;
	} else {
		var left = margin;
		var right = widthControlSlide - (widthControlItem + margin);
	}

	left = left + distanceControlSlide;
	right = right + distanceControlSlide;

	if (lastControl < activeControl) {
		lineElement.css({
			"right": `${right}px`
		});

		setTimeout(() => {
			lineElement.css({
				"left": `${left}px`,
			});
		}, timeDistanceLeftRight);
	} else if (lastControl > activeControl) {
		lineElement.css({
			"left": `${left}px`,
		});

		setTimeout(() => {
			lineElement.css({
				"right": `${right}px`
			});
		}, timeDistanceLeftRight);
	} else {
		lineElement.css({
			"left": `${left}px`,
			"right": `${right}px`
		});
	}
}

$('#recomend-slide').owlCarousel({
	loop: true,
	margin: 30,
	nav: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 2
		},
		1000: {
			items: 3
		}
	}
});

var showing = false
$('.button-show').click(function (e) { 
	e.preventDefault();
	var hideBannerList = $('.hide-banner-list');
	if (!showing) {
		hideBannerList.css({
			'height': '2540px',
			'margin-top': '0px'
		});

		showing = true;
	} else {		
		hideBannerList.css({
			'height': '0px',
			'margin-top': '-100px'
		});

		showing = false;	
	}
});