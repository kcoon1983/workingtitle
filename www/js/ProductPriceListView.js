var ProductPriceListView = function(productId) {
	var mProductId = productId;

	this.initialize = function() {
		this.$el = $('<div/>');
	};

	this.render = function() {
		var mContext = {
			product_id: mProductId
		}
		this.$el.html(Handlebars.getTemplate('productPriceList')(mContext));
		return this;
	}

	this.initialize();
}