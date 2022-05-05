var timeOutNext;
var timeOnAutoRunMainSlide;

setTransitionItem();

$('.button-prev').click(function (e) {
	e.preventDefault();
	canHover = false;
	clearTimeout(timeOnAutoRunMainSlide);
	var indexSlideActive = $('.fa-carousel-item.active').attr('data-item');
	indexSlideActive--;
	slideMove(indexSlideActive, control = 'prev');	
	clearInterval(timeOutNext);
	autoRunSlide();
});

$('.button-next').click(function (e) {
	e.preventDefault();
	canHover = false;
	clearTimeout(timeOnAutoRunMainSlide);
	var indexSlideActive = $('.fa-carousel-item.active').attr('data-item');
	indexSlideActive++;
	slideMove(indexSlideActive, control = 'next');
	clearInterval(timeOutNext);
	autoRunSlide();
});

function slideMove(index, control = '', hover = true) {
	if (!slideMoving) {
		var lastActive = $(`.fa-carousel-item.active`);
		slideMoving = true;
		index = calIndexNumber(index);

		var prevIndex = index - 1;
		prevIndex = calIndexNumber(prevIndex);

		var nextIndex = index + 1;
		nextIndex = calIndexNumber(nextIndex);

		var activeItem = $(`[data-item='${index}']`);
		var prevItem = $(`[data-item='${prevIndex}']`);
		var nextItem = $(`[data-item='${nextIndex}']`);

		handleMoveByCss(activeItem);
		resetClassWhenDoneMove(activeItem, nextItem, prevItem);

		// Handle hover	after prev	
		if (control != '' && hover) {
			$('.fa-carousel-item.hoving').removeClass('hoving');
			if (control == 'prev') {
				var itemHover = prevItem;
				var translateXContent = pxHoverContent;
				var translateX = -bodyWidth + pxHover;
				itemHover.css({
					"transform": `translateX(-${bodyWidth}px)`,
					"transition": "",
					"transition-delay": "",
				});
			}
			if (control == 'next') {
				var itemHover = nextItem;
				var translateXContent = -pxHoverContent;
				var translateX = bodyWidth - pxHover;
			}

			itemHover.addClass('hoving');
			setTimeout(() => {
				itemHover.css({
					"transform": `translateX(${translateX}px)`,
					"transition": seccondTransitonCarouselDefault,
					"z-index": "20",
					"transition-delay": ".5s",
					"transition-timing-function": "cubic-bezier(0, 0, 0, 1.19)"
				});
			}, 50);

			moveHoverContentActive(activeItem, translateXContent)
		}

		setTimeout(() => { // Moving done			
			resetCssWhenDoneMove(activeItem);
			setTransitionItem();
			resetCssContent(lastActive);
			resetCssOutHover(activeItem);
			slideMoving = false;
			canHover = true;
		}, transitonDone);
	}
}

function handleMoveByCss(element) {
	element.css({
		"transform": "translateX(0px)",
		"z-index": "10",
		"transition": seccondTransitonCarouselDefault,
		"transition-timing-function": "cubic-bezier(0, 0, 0, 1.19)"
	});
}

function moveHoverContentActive(activeItem, translateXContent) {
	let contentActiveItem = activeItem.find('.content');
	contentActiveItem.css('transform', `translateX(${translateXContent}px)`);
}

function resetCssContent(element) {
	let contentActiveItem = element.find('.content');
	contentActiveItem.css({
		"transform": "",
	});
}

function resetCssWhenDoneMove(element) {
	element.css({
		"transition": "",
		"transition-timing-function": "",
	});
}

function resetClassWhenDoneMove(activeItem, nextItem, prevItem) {
	$('.fa-carousel-item').removeClass('active next-item prev-item');
	activeItem.addClass('active');
	nextItem.addClass('next-item');
	prevItem.addClass('prev-item');
}

var nextHover;
var waitForOutNextHover;
$(".button-next").hover(
	function () {
		// clearInterval(timeOutNext);
		runAnimation($(this));
		if (canHover) {
			clearTimeout(nextHover);
			let nextItem = $('.next-item');
			let translateX = bodyWidth - pxHover;
			let translateXContent = -pxHoverContent;
			nextItem.addClass('hoving');
			moveHover(nextItem, translateX);
			moveHoverContent(translateXContent);
		} else {
			clearTimeout(waitForOutNextHover);
		}
	},
	function () {
		// mainSlideAutoNext();
		turnOffAnimation($(this));
		if (canHover) {
			outNextHoverLogic();
		} else {
			waitForOutNextHover = setTimeout(() => {
				outNextHoverLogic();
			}, timeWaitingOutForHover);
		}
	}
);

function outNextHoverLogic() {
	setTransitionOutHover('next-item');
	let nextItem = $('.next-item.hoving');
	let translateX = bodyWidth;
	let translateXContent = 0;
	moveHover(nextItem, translateX);
	moveHoverContent(translateXContent);
	nextHover = setTimeout(() => {
		nextItem.removeClass('hoving');
		resetCssOutHover(nextItem);
	}, transitonDone);
}

var prevHover;
var waitForOutPrevHover;
$(".button-prev").hover(
	function () {
		// clearInterval(timeOutNext);
		runAnimation($(this));
		if (canHover) {
			clearTimeout(prevHover);
			let prevItem = $('.prev-item');
			let translateX = -bodyWidth + pxHover;
			let translateXContent = pxHoverContent;
			prevItem.addClass('hoving');
			moveHover(prevItem, translateX);
			moveHoverContent(translateXContent);
		} else {
			clearTimeout(waitForOutPrevHover);
		}
	},
	function () {
		// mainSlideAutoNext();
		turnOffAnimation($(this));
		if (canHover) {
			outPrevHoverLogic();
		} else {
			waitForOutPrevHover = setTimeout(() => {
				outPrevHoverLogic();
			}, timeWaitingOutForHover);
		}
	}
);

function outPrevHoverLogic() {
	setTransitionOutHover('prev-item');
	let prevItem = $('.prev-item.hoving');
	let translateX = -bodyWidth;
	let translateXContent = 0;
	moveHover(prevItem, translateX);
	moveHoverContent(translateXContent);
	prevHover = setTimeout(() => {
		prevItem.removeClass('hoving');
		resetCssOutHover(prevItem);
	}, transitonDone);
}

function setTransitionOutHover(classe) {
	let element = $(`.fa-carousel-item.${classe}`);
	element.css('transition-timing-function', `cubic-bezier(0.4, 0, 0.77, 0.37)`);
}

function moveHoverContent(translateX) {
	let activeItem = $('.fa-carousel-item.active');
	let contentActiveItem = activeItem.find('.content');
	contentActiveItem.css('transform', `translateX(${translateX}px)`);
}

function moveHover(element, translateX) {
	element.css({
		"transform": `translateX(${translateX}px)`,
		"transition": seccondTransitonCarouselDefault,
		"transition-timing-function": "cubic-bezier(0, 0, 0, 1.19)",
		"z-index": "20"
	});
}

function resetCssOutHover(element) {
	element.css({
		"transition": "",
		"transition-timing-function": "",
		"z-index": ""
	});
}

function setTransitionItem() {
	let item = $(`.${classItemCarousel}`);
	let preItem = $('.prev-item').not(`.${classItemCarousel}.hoving`);;
	let normalItem = item.not(`.${classItemCarousel}.active, .${classItemCarousel}.hoving`);

	// Moving		
	normalItem.css('transform', `translateX(${bodyWidth}px)`);
	preItem.css('transform', `translateX(-1519.2px)`);
	// Done moving
}


var genericBg = $('.generic-btn-bg');
var genericSolid = $('.generic-btn-solid-stroke');
var genericDotted = $('.generic-btn-dotted-stroke');
$('.box-circle-main').hover(function () {
	genericBg.attr("r", 72);
	genericBg.css('opacity', 1);
	genericSolid.attr("r", 83);
	genericDotted.attr("r", 60);
}, function () {
	genericBg.attr("r", 60);
	genericBg.css('opacity', 0);
	genericSolid.attr("r", 60);
	genericDotted.attr("r", 83);
});

var blogItem = $('.list-blog.right .item');
var blogControl = $('.list-blog.right .control');
$('.list-blog.left').hover(function () {
	blogItem.css('opacity', '.3');
	blogControl.css('opacity', '.3');
}, function () {
	blogItem.css('opacity', '1');
	blogControl.css('opacity', '1');
});

var blogItemL = $('.list-blog.left .item');
var blogControlL = $('.list-blog.left .control');
$('.list-blog.right').hover(function () {
	blogItemL.css('opacity', '.3');
	blogControlL.css('opacity', '.3');
}, function () {
	blogItemL.css('opacity', '1');
	blogControlL.css('opacity', '1');
});

$('.box-image-clip').hover(function () {
	var clipRect = $(this).find('.product-swatch-clip-rect');
	clipRect.css('transform', 'matrix(0.7071,0.7071,-0.7071,0.7071,50,-20.7107)');
}, function () {
	var clipRect = $(this).find('.product-swatch-clip-rect');
	clipRect.css('transform', 'matrix(0.7071,0.7071,-0.7071,0.7071,-50,-120.7107)');
});

window.addEventListener("scroll", function () {
	var header = document.querySelector(".nav-s");
	header.classList.toggle("sticky", window.scrollY > 46);
});

function setInterFunction() {
	timeOutNext = setInterval(() => {
		canHover = false;
		var indexSlideActive = $('.fa-carousel-item.active').attr('data-item');
		indexSlideActive++;
		slideMove(indexSlideActive, control = 'next', hover = false);
	}, 10000);
}

setInterFunction();

function autoRunSlide() {
	timeOnAutoRunMainSlide = setTimeout(function () {
		setInterFunction();
	}, 5000);
}