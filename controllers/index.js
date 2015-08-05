var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	katie: function(req, res) {
		res.render('katie');
	}
};

module.exports = indexController;