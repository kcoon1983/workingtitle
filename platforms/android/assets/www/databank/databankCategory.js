var DatabankCategory = function() {
	this.initialize = function() {
		window.localStorage.setItem("databankCategory", JSON.stringify(
			[
				{ 
					"category_id": 0,
					"category_name": "Mac",
					"category_name_display": "Mac",
					"category_description": "Explore the world of Mac. Check out the MacBook Pro, iMac Pro, MacBook, iMac and more",
					"category_image": "category/cat_0.svg"
				},
				{
					"category_id": 1,
					"category_name": "iPad",
					"category_name_display": "iPad",
					"category_description": "Explore the world of iPad. Check out the iPad Pro, available in two sizes, iPad and iPad mini",
					"category_image": "category/cat_1.svg"
				},
				{
					"category_id": 2,
					"category_name": "iPhone",
					"category_name_display": "iPhone",
					"category_description": "Explore iPhone, the world's most powerful personal device",
					"category_image": "category/cat_2.svg"
				},
				{
					"category_id": 3,
					"category_name": "Apple WATCH",
					"category_name_display": "<span class='fab fa-apple'></span> WATCH",
					"category_description": "Apple Watch is the ultimate device for a healthy life. Choose from a range of models including Apple Watch Series 3 and Apple Watch Series 1",
					"category_image": "category/cat_3.svg"
				},
				{
					"category_id": 4,
					"category_name": "Apple TV",
					"category_name_display": "<span class='fab fa-apple'></span> TV",
					"category_description" : "Apple TV 4K lets you watch movies and shows in amazing 4K HDR quality. Offers great content from top apps and works with a wide variety of accessories",
					"category_image": "category/cat_4.svg"
				}
			]
		));
	};

	this.getAll = function() {
		return JSON.parse(window.localStorage.getItem("databankCategory"));
	}

	this.fincByCategoryId = function(category_id) {
		var categories = JSON.parse(window.localStorage.getItem("databankCategory"));
		categories = categories.filter(function(element) {
			return element.category_id == category_id;
		});
		return categories;
	}
}