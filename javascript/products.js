var dataFilter = products;

renderHTML(products);
renderHTMLFilter(filerObj);

function getHTMLBoxProduct(index, product) {
	let fmprice = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(product.price);
	var boxProduct = `
		<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 box-sanpham`;
			if (index >= 3) {
				boxProduct += ` mt-6`;
			}
		boxProduct += `">
			<div class="product-item">
				<div class="sticky-box">
					<div class="text">So sánh</div> 
				</div>
				
				<div class="box-image">
					<img src="images/products/${product.imageUrl}" alt="">
				</div>

				<div class="info">
					<div class="product-series"><strong>PRO</strong>&nbsp;<span>sê-ri</span></div>
					<div class="info-product">
						<div class="name">
							${product.name}
						</div>

						<div class="subtitle">
							${product.description}
						</div>

						<div class="pricing-info">
							${fmprice}&nbsp;
							<span class="currency-symbol">₫</span>
						</div>											
					</div>
				</div>
			</div>
			</div>
		`;
	return boxProduct;
}	

function renderHTML(data) {
	var html = ``;
	if (data.length > 0) {
		data.forEach(function (element, index) { 		
			html += getHTMLBoxProduct(index, element);
		});
	} else {
		html += '<h3 class="text-center">Không tìm thấy sản phẩm !</h3>'
	}
	

	var box = $('.list-product').children();
	box.children().remove()
	box.append(html);
}

function renderHTMLFilter(data) {
	var html = ``;
	data.forEach(function (element, index) { 		
		html += getHTMLFilter(index, element);
	});

	var box = $('.main-filter').children();
	box.children().remove()
	box.append(html);
}

function getHTMLFilter(index, data) {	
	var html = `
	<div class="fa-title">
		<div class="title d-flex justify-content-between align-items-center">
			<div class="text text-uppercase" style="font-weight: bold;">
				${data.name}
			</div>

			<div class="control me-1">
				<i class="fa-solid fa-angle-up"></i>
			</div>
		</div>

		<div class="option">`;
			if (index == 2) { // input radio
				for (let i = 0; i < data.data.length; i++) {
					html += `		
					<div class="mb-3 form-check">					
						<input type="radio" class="form-check-input input-radio-filter" name="price-radio" id="filter-option-${index}-${data['data'][i].code}" data-filter="${index}" data-code="${data['data'][i].code}">
						<label class="form-check-label" for="filter-option-${index}-${data['data'][i].code}">${data['data'][i].name}</label>				
					</div>`;
				}				
			} else if (index > 2) {
				for (let i = 0; i < data.data.length; i++) {
					html += `		
					<div class="mb-3 form-check">					
						<input type="checkbox" class="form-check-input input-filter-off" id="filter-option-${index}-${data['data'][i].code}" data-filter="${index}" data-code="${data['data'][i].code}">
						<label class="form-check-label" for="filter-option-${index}-${data['data'][i].code}">${data['data'][i].name}</label>				
					</div>`;
				}				
			}	 else {
				for (let i = 0; i < data.data.length; i++) {
					html += `		
					<div class="mb-3 form-check">					
						<input type="checkbox" class="form-check-input input-filter" id="filter-option-${index}-${data['data'][i].code}" data-filter="${index}" data-code="${data['data'][i].code}">
						<label class="form-check-label" for="filter-option-${index}-${data['data'][i].code}">${data['data'][i].name}</label>				
					</div>`;
				}				
			}		
			html += ` </div>
	</div>
	`
	return html;
}

var filterChecked = {
	filter: null,
	price: null,
	code: [],
}


var filterPrice;

$('.input-radio-filter').change(function() {
	var code = $(this).attr('data-code');
	filterPrice = code;

	filterPriceProduct(filterPrice);
});

function filterPriceProduct(code) {
	var data = [];

	if (dataFilter.length == 0) {
		var dataFor = products;
	} else {
		var dataFor = dataFilter;
	}		

	dataFor.forEach(product => {
		if (code == 0 && filterPrice0(product.price)) {			
			data.push(product);
		} else if (code == 1 && filterPrice1(product.price)) {			
			data.push(product);
		} else if (code == 2 && filterPrice2(product.price)) {
			data.push(product);
		} else if (code == 3 && filterPrice3(product.price)) {
			data.push(product);
		} else if (code == -1) {
			console.log(product);
			data.push(product);
		}
	});

	renderHTML(data);
}

function filterPrice0(price) { 
	return (price > 0 && price < 1000000) ? true : false;		
}

function filterPrice1(price) { 
	return (price > 1000000 && price < 2500000) ? true : false;		
}

function filterPrice2(price) { 
	return (price > 2500000 && price < 5000000) ? true : false;		
}

function filterPrice3(price) { 
	return (price > 5000000) ? true : false;		
}

$('.input-filter').change(function() {
	var filter = $(this).attr('data-filter');
	var code = $(this).attr('data-code');
	if(this.checked) {
		if (filter == 1) {
			filterChecked.filter = 1;
			$('[data-filter=0]').prop('checked', false);
		}

		if (filter == 0) {
			filterChecked.filter = 0;			
			$('[data-filter=1]').prop('checked', false);
		}				
	}

	filterChecked.code = [];
	$('.input-filter:checked').map(function(){
		filterChecked.code.push($(this).attr('data-code'));
	});

	filterProduct(filterChecked);
});

function filterProduct(filterChecked) {
	dataFilter = [];
	products.forEach(product => {
		if (filterChecked.filter == 0) {
			var arr = filterChecked.code;			
			if (arr.indexOf(`${product.code}`) >= 0) {
				dataFilter.push(product);
			}
		}

		if (filterChecked.filter == 1) {
			var arr = filterChecked.code;			
			if (arr.indexOf(`${product.type}`) >= 0) {
				dataFilter.push(product);
			}
		}
	});

	if ($('.input-radio-filter').is(':checked')) { 
		filterPriceProduct(filterPrice);
	} else {
		renderHTML(dataFilter);
	}	
}