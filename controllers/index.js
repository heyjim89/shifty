var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	katie: function(req, res) {
		res.render('katie');
	},
	jim: function(req, res) {
		res.render('jim');
	},
	justin: function(req, res) {
		res.render('justin');
	},
	michael: function(req, res) {
		res.render('michael');
	}
};

module.exports = indexController;