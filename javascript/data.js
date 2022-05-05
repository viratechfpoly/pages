var type = {
	mouse: 0,
	earphone: 1,
	mousePads: 2,
	keyboard: 3
}

var filerObj = [
	{
		name: 'Bộ sưu tập CUBE',
		data: [
			{
				name: 'Đen',
				code: 0
			},
			{
				name: 'San hô',
				code: 1
			},
			{
				name: 'Trắng',
				code: 2
			}
		]
	},
	{
		name: 'Loại sản phẩm',
		data: [
			{
				name: 'Chuột',
				code: type.mouse
			},
			{
				name: 'Tai nghe',
				code: type.earphone
			},
			{
				name: 'Lót chuột',
				code: type.mousePads
			},
			{
				name: 'Bàn phím',
				code: type.keyboard
			}
		]
	},
	{
		name: 'Giá',
		data: [
			{
				name: 'Trống',
				code: -1,
			},
			{
				name: '0 - 1.000.000 đ',
				code: 0
			},
			{
				name: '1.000.000 - 2.500.000 đ',
				code: 1
			},
			{
				name: '2.500.000 - 5.000.000 đ',
				code: 2
			},
			{
				name: '5.000.000+ đ',
				code: 3
			}
		]
	},
	{
		name: 'Bộ sưu tập CYBERPUNK',
		data: [
			{
				name: 'Đen',
				code: 0
			},
			{
				name: 'San hô',
				code: 1
			},
			{
				name: 'Trắng',
				code: 2
			}
		]
	},
	{
		name: 'Bộ sưu tập hologram',
		data: [
			{
				name: 'Đen',
				code: 0
			},
			{
				name: 'San hô',
				code: 1
			},
			{
				name: 'Trắng',
				code: 2
			}
		]
	},
	{
		name: 'Bộ sưu tập vintage',
		data: [
			{
				name: 'Đen',
				code: 0
			},
			{
				name: 'San hô',
				code: 1
			},
			{
				name: 'Trắng',
				code: 2
			}
		]
	}	
];

var products = [
	{
		name: "CHUỘT KHÔNG DÂY PRO",
		description: "Phiên bản League of Legends",
		price: 2990000,
		type: type.mouse,
		code: 0,
		imageUrl: 'chuot1.jpg'
	},
	{
		name: "Lót chuột chơi game XL G840 (G840 XL Gaming Mouse Pad)",
		description: "Phiên bản League of Legends",
		price: 1199000,
		type: type.mousePads,
		code: 0,
		imageUrl: 'lotchuot1.jpg'
	},
	{
		name: "TAI NGHE CHƠI GAME PRO X",
		description: "Phiên bản League of Legends",
		price: 3899000,
		type: type.earphone,
		code: 0,
		imageUrl: 'tainghe1.jpg'
	},
	{
		name: "Bàn phím chơi game cơ học G413 TKL SE",
		description: "Phiên bản League of Legends",
		price: 1599000,
		type: type.keyboard,
		code: 0,
		imageUrl: 'banphim1.jpg'
	},	
	{
		name: "CHUỘT KHÔNG DÂY PRO",
		description: "Phiên bản League of Legends",
		price: 2990000,
		type: type.mouse,
		code: 1,
		imageUrl: 'chuot2.jpg'
	},
	{
		name: "Lót chuột chơi game XL G840 (G840 XL Gaming Mouse Pad)",
		description: "Phiên bản League of Legends",
		price: 1199000,
		type: type.mousePads,
		code: 1,
		imageUrl: 'lotchuot2.jpg'
	},
	{
		name: "TAI NGHE CHƠI GAME PRO X",
		description: "Phiên bản League of Legends",
		price: 3899000,
		type: type.earphone,
		code: 1,
		imageUrl: 'tainghe2.jpg'
	},
	{
		name: "Bàn phím chơi game cơ học G413 TKL SE",
		description: "Phiên bản League of Legends",
		price: 1599000,
		type: type.keyboard,
		code: 1,
		imageUrl: 'banphim2.jpg'
	},
	{
		name: "CHUỘT KHÔNG DÂY PRO",
		description: "Phiên bản League of Legends",
		price: 2990000,
		type: type.mouse,
		code: 2,
		imageUrl: 'chuot3.jpg'
	},
	{
		name: "Lót chuột chơi game XL G840 (G840 XL Gaming Mouse Pad)",
		description: "Phiên bản League of Legends",
		price: 1199000,
		type: type.mousePads,
		code: 2,
		imageUrl: 'lotchuot3.jpg'
	},	
	{
		name: "TAI NGHE CHƠI GAME PRO X",
		description: "Phiên bản League of Legends",
		price: 3899000,
		type: type.earphone,
		code: 2,
		imageUrl: 'tainghe3.jpg'
	},	
	{
		name: "Bàn phím chơi game cơ học G413 TKL SE",
		description: "Phiên bản League of Legends",
		price: 1599000,
		type: type.keyboard,
		code: 2,
		imageUrl: 'banphim3.jpg'
	},	
	{
		name: "test",
		description: "Phiên bản League of Legends",
		price: 5500000,
		type: type.keyboard,
		code: 2,
		imageUrl: 'banphim3.jpg'
	}
	
];
