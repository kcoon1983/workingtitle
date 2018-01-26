const TEMPLATEBARTAB_HOME = 0;
const TEMPLATEBARTAB_SEARCH = 1;
const TEMPLATEBARTAB_HERE = 2;
const TEMPLATEBARTAB_MORE = 3;

var TemplateBarTabView = function() {
	var mContext = null;

	this.initialize = function() {
		this.$el = $('<div/>');
	};

	this.setActive = function(name) {
		mContext = { homeActive: "", searchActive: "", hereActive: "", notificationActive: "", moreActive: "" };
		switch(name) {
			case TEMPLATEBARTAB_HOME:
				mContext.homeActive = " active";
				break
			case TEMPLATEBARTAB_SEARCH:
				mContext.searchActive = " active";
				break;
			case TEMPLATEBARTAB_HERE:
				mContext.hereActive = " active";
				break;
			case TEMPLATEBARTAB_MORE:
				mContext.moreActive = " active";
				break;
			default:
				mContext.homeActive = " active";
				break;
		}
	}

	this.render = function() {
		this.$el.html(Handlebars.getTemplate("templateBarTab")(mContext));
		return this;
	};

	this.initialize();
}