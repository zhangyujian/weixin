var mysql         = require('mysql')
  , md5           = require('./common').md5
  , session       = require('./common').session
  , connection    = require('./common').connection
  , markdown      = require('markdown').markdown
  , bc            = require('buffer-concat');

exports.index = function(req, res){
	res.render('default/index', { 
		title: "首页"
	});
};
