var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	jim: function(req,res){
		res.render('jim')
	}
};

module.exports = indexController;