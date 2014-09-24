// JavaScript Document
var index      = require('./routes/index');

module.exports = function(app){
	
	// Routes
	app.get('/', index.index);

	app.get('*', function(req, res){
	    res.render('admin/404', {
	        title: '404'
	    })
	});

};



