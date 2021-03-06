var mysql         = require('mysql')
  , crypto        = require('crypto')
  , md5           = require('./common').md5
  , session       = require('./common').session
  , connection    = require('./common').connection
  , markdown      = require('markdown').markdown
  , bc            = require('buffer-concat')
  , handleXML        = require('./xml').handleXML;

var select = require('xpath.js')
    , dom = require('xmldom').DOMParser;

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
    var chunks = [];
    req.on('data', function (data) {
        chunks.push(data);
    });
    req.on('end', function () {
        chunks = Buffer.concat(chunks).toString();
        try{
            var xml = handleXML(chunks);
            res.setHeader('Content-Type', 'application/xml');
            res.end(xml);
            
        }
        catch(e){
            console.log('error..');
        }
    });

};

exports.weixintest = function(req, res){
    /*var xml = '<xml>'
            +'<ToUserName><![CDATA[ocwedjkM8vjTYsqgXkPg3kVfAdM0]]></ToUserName>'
            +'<FromUserName><![CDATA[gh_b723fe0f6ce2]]></FromUserName>'
            +'<CreateTime>1411881868</CreateTime>'
            +'<MsgType><![CDATA[text]]></MsgType>'
            +'<Content><![CDATA[这是一条测试语句]]></Content>'
            +'<MsgId>6064321155877753955</MsgId>'
            +'</xml>';
    console.log(xmltpl.handleXML(xml));*/

    var xml = '<xml><ToUserName><![CDATA[ocwedjkM8vjTYsqgXkPg3kVfAdM0]]></ToUserName><FromUserName><![CDATA[gh_b723fe0f6ce2]]></FromUserName><CreateTime>1411985342</CreateTime><Content><![CDATA[444]]></Content><MsgId>6064430866522365770</MsgId></xml>'
    res.setHeader('Content-Type', 'application/xml');
    res.end(xml);
};
