var DatabankProduct = function() {
	this.initialize = function() {
		window.localStorage.setItem("databankProduct", JSON.stringify(
			[
				{
					"product_id": 0,
					"product_category_id": 0,
					"product_name": "iMac Pro",
					"product_name_display": "iMac Pro",
					"product_description": "Power to the pro.",
					"product_image": "product/pro_0.jpg"
				},
				{
					"product_id": 1,
					"product_category_id": 0,
					"product_name": "iMac",
					"product_name_display": "iMac",
					"product_description": "The vision is brigther than ever.",
					"product_image": "product/pro_1.jpg"
				},
				{
					"product_id": 2,
					"product_category_id": 0,
					"product_name": "MacBook Pro",
					"product_name_display": "MacBook Pro",
					"product_description": "A touch of genius.",
					"product_image": "product/pro_2.jpg"
				},
				{
					"product_id": 3,
					"product_category_id": 0,
					"product_name": "MacBook",
					"product_name_display": "MacBook",
					"product_description": "Light. Years ahead.",
					"product_image": "product/pro_3.jpg"
				},
				{
					"product_id": 4,
					"product_category_id": 0,
					"product_name": "MacBook Air",
					"product_name_display": "MacBook Air",
					"product_description": "Make big things happen. All day long.",
					"product_image": "product/pro_4.jpg"
				},
				{
					"product_id": 5,
					"product_category_id": 1,
					"product_name": "iPad Pro",
					"product_name_display": "iPad Pro",
					"product_description": "Anything you can do, you can do better.",
					"product_image": "product/pro_5.jpg"
				},
				{
					"product_id": 6,
					"product_category_id": 1,
					"product_name": "iPad",
					"product_name_display": "iPad",
					"product_description": "Flat-out fun.",
					"product_image": "product/pro_6.jpg"
				},
				{
					"product_id": 7,
					"product_category_id": 1,
					"product_name": "iPad mini 4",
					"product_name_display": "iPad mini 4",
					"product_description": "Mighty. Small.",
					"product_image": "product/pro_7.jpg"
				},
				{
					"product_id": 8,
					"product_category_id": 2,
					"product_name": "iPhone X",
					"product_name_display": "iPhone X",
					"product_description": "Say hello to the future.",
					"product_image": "product/pro_8.jpg"
				},
				{
					"product_id": 9,
					"product_category_id": 2,
					"product_name": "iPhone 8",
					"product_name_display": "iPhone 8",
					"product_description": "A new generation of iPhone.",
					"product_image": "product/pro_9.jpg"
				},
				{
					"product_id": 10,
					"product_category_id": 2,
					"product_name": "iPhone 7",
					"product_name_display": "iPhone 7",
					"product_description": "Choose an iPhone 7 model.",
					"product_image": "product/pro_10.jpg"
				},
				{
					"product_id": 11,
					"product_category_id": 2,
					"product_name": "iPhone 6s",
					"product_name_display": "iPhone 6s",
					"product_description": "Choose iPhone 6s or iPhone 6s Plus.",
					"product_image": "product/pro_11.jpg"
				},
				{
					"product_id": 12,
					"product_category_id": 2,
					"product_name": "iPhone SE",
					"product_name_display": "iPhone SE",
					"product_description": "A big step for small.",
					"product_image": "product/pro_12.jpg"
				},
				{
					"product_id": 13,
					"product_category_id": 3,
					"product_name": "Apple WATCH Series 3",
					"product_name_display": "<span class='fab fa-apple'></span> WATCH Series 3",
					"product_description": "Elevated in every way.",
					"product_image": "product/pro_13.jpg"
				},
				{
					"product_id": 14,
					"product_category_id": 3,
					"product_name": "Apple WATCH Series 1",
					"product_name_display": "<span class='fab fa-apple'></span> WATCH Series 1",
					"product_description": "Here's to a healthy life.",
					"product_image": "product/pro_14.jpg"
				},
				{
					"product_id": 15,
					"product_category_id": 4,
					"product_name": "Apple TV 4K",
					"product_name_display": "<span class='fab fa-apple'></span> TV 4K",
					"product_description": "The 4K HDR era. Now playing.",
					"product_image": "product/pro_15.jpg"
				},
				{
					"product_id": 16,
					"product_category_id": 4,
					"product_name": "Apple TV",
					"product_name_display": "<span class='fab fa-apple'></span> TV",
					"product_description": "Buy Apple TV",
					"product_image": "product/pro_16.jpg"
				}
			]
		));
	};

	this.fincByCategoryId = function(product_category_id) {
		var products = JSON.parse(window.localStorage.getItem("databankProduct"));
		products = products.filter(function(element) {
			return element.product_category_id == product_category_id;
		});
		return products;
	}
}