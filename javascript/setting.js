const itemSlideLength = $('.fa-carousel-item').length;
const bodyWidth = $('body').innerWidth();
const classItemCarousel = 'fa-carousel-item';
const pxHover = 220;
const pxHoverContent = 30;
const transitonCarouselDefault = 800;
const seccondTransitonCarouselDefault = '.8s';
const transitonDone = transitonCarouselDefault + 100;

var slideMoving = false;
var canHover = true;

var activeIndex = 1;

const timeWaitingOutForHover = 1500;