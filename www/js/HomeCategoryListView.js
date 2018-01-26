var HomeCategoryListView = function(categories) {
	var mContext = categories;

	this.initialize = function() {
		this.$el = $('<div/>');
	};

	this.render = function() {
		this.$el.html(Handlebars.getTemplate('homeCategoryList')(mContext));
		return this;
	}

	this.initialize();
}