function calIndexNumber(index) {	
	if (index == 0) {		
		index = itemSlideLength;		
	}	
	else if (index > itemSlideLength) {		
		index = 1;	
	}

	return index;
}

function runAnimation(element) {
	var bg = element.find('.js-bg');
	var dottedRotate = element.find('.js-dotted_stroke');

	bg.attr({	
    r:"120"    
	});

	bg.css({				
		"opacity": "0.75",		
	});

	dottedRotate.css({				
		"opacity": "0.75",		
	});

	dottedRotate.addClass('rotate-forever');

}

function turnOffAnimation(element) {
	var bg = element.find('.js-bg');
	var dottedRotate = element.find('.js-dotted_stroke');
	
	bg.attr({	
    r:"111"    
	});

	bg.css({				
		"opacity": "0.3",		
	});

	dottedRotate.css({				
		"opacity": "0.3",		
	});

	dottedRotate.removeClass('rotate-forever');


}

