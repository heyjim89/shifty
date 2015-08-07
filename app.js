var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/katie', indexController.katie); 
app.get('/jim', indexController.jim); 
// app.get('/justin', indexController.justin); 
// app.get('/michael', indexController.miachel); 


var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
