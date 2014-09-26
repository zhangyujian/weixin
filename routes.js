// JavaScript Document
var index      = require('./routes/index');

module.exports = function(app){
	
	// Routes
	app.get('/', index.index);
	app.get('/weixin', index.weixin);
	app.post('/weixin', index.weixinpost);
	app.get('/weixintest', index.weixintest);

	app.get('*', function(req, res){
	    res.render('default/404', {
	        title: '404'
	    })
	});

};



