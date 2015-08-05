var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	michael: function(req, res) {
		res.render('michael');
	}
};

module.exports = indexController;