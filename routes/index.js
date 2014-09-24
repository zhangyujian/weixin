var mysql         = require('mysql')
  , crypto        = require('crypto')
  , md5           = require('./common').md5
  , session       = require('./common').session
  , connection    = require('./common').connection
  , markdown      = require('markdown').markdown
  , bc            = require('buffer-concat');

function sha1(str) {
    var md5sum = crypto.createHash('sha1');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
}

exports.index = function(req, res){
	res.render('default/index', {
        title: "微信"
    });
};
exports.weixin = function(req, res){
	var token = "weixin",
		echostr = req.query.echostr,
		timestamp = req.query.timestamp,
		nonce = req.query.nonce,
		signature = req.query.signature,
		arr = [token,timestamp,nonce],
		arr = arr.sort();
	var sign = sha1(arr.join(""));
	if(sign == signature){
		res.send(echostr);
	}else{
		res.send("failed");
	}
};
exports.weixinpost = function(req, res){
	req.addListener("data",function(data){
	    console.log("Received POST data :")+data ;  
	});
};