var ProductView = function(categoryId) {
	var mCategoryId = categoryId;
	var mProductListView = null;
	var mDatabankProduct = null;
	var mDatabankCategory = null;

	this.initialize = function() {
		mDatabankProduct = new DatabankProduct();
		mDatabankProduct.initialize();

		mDatabankCategory = new DatabankCategory();

		mProductListView = new ProductListView(mDatabankProduct.fincByCategoryId(mCategoryId));
		this.$el = $('<div/>');
	};

	this.render = function() {
		var mContext = {
			category_name_display: mDatabankCategory.fincByCategoryId(mCategoryId)[0].category_name_display
		}
		this.$el.html(Handlebars.getTemplate('product')(mContext));
		$("#productlist", this.$el).html(mProductListView.render().$el);
		return this;
	}

	this.initialize();
}
