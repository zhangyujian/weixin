var mysql         = require('mysql')
  , md5           = require('./common').md5
  , session       = require('./common').session
  , connection    = require('./common').connection
  , markdown      = require('markdown').markdown
  , bc            = require('buffer-concat');

exports.index = function(req, res){
	connection.query(
	  'SELECT * FROM posts WHERE cid = 6 order by id desc limit 4',
	  function selectCb(err, results, fields) {
	    if (err) {
	      throw err;
	    }
	    res.render('default/index', { 
	    	tables: results,
	    	title: "首页"
	    });
	  }
	);
};
