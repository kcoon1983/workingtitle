(function() {
	document.addEventListener('deviceready', function() {
		var slider = new PageSlider($('body'));

		// Override default HTML alert with native dialog
		if (navigator.notification) {
			window.alert = function(message, callback) {
				navigator.notification.alert(
					message,			// message
					callback,			// callback
					"Working Title",	// title
					"OK"				// buttonName
				);
			};
		}

		FastClick.attach(document.body);

		// Routers
		router.addRoute('', function() { slider.slidePage(new HomeView().render().$el); });
		router.addRoute('category/:category_id', function(categoryId) { slider.slidePage(new ProductView(categoryId).render().$el); });

		router.addRoute('product/:product_id', function(productId) { slider.slidePage(new ProductPriceListView(productId).render().$el); });
		router.start();
	}, false);
}());