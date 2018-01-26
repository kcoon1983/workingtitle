var HomeView = function() {
	var mContext = null;
	var mTemplateBarTabView = null;
	var mHomeCategoryListView = null;
	var mDatabankCategory = null;

	this.initialize = function() {
		mDatabankCategory = new DatabankCategory();
		mDatabankCategory.initialize();

		this.$el = $('<div/>');
		mTemplateBarTabView = new TemplateBarTabView();
		mTemplateBarTabView.setActive(TEMPLATEBARTAB_HOME);

		mHomeCategoryListView = new HomeCategoryListView(mDatabankCategory.getAll());
	};

	this.render = function() {
		mContext = {
			title: GLOBAL_TITLE
		}
		this.$el.html(Handlebars.getTemplate('home')(mContext));
		$("#bar-tab", this.$el).html(mTemplateBarTabView.render().$el);
		$("#segmentcategorylist", this.$el).html(mHomeCategoryListView.render().$el);
		return this;
	}

	this.initialize();
}