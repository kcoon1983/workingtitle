var ProductListView = function(products) {
	var mContext = products;

	this.initialize = function() {
		this.$el = $('<div/>');
	};

	this.render = function() {
		this.$el.html(Handlebars.getTemplate('productList')(mContext));
		return this;
	}
	
	this.initialize();
}