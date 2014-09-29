var select = require('xpath.js')
    , dom = require('xmldom').DOMParser;


var handleXML = function(source){
	var doc = new dom().parseFromString(source); 
    var MsgType = select(doc, "//MsgType")[0].firstChild.data;
    var username = select(doc, "//ToUserName")[0].firstChild.data;
    var fusername = select(doc, "//FromUserName")[0].firstChild.data;
    var CreateTime = select(doc, "//CreateTime")[0].firstChild.data;
    var MsgId = select(doc, "//MsgId")[0].firstChild.data;
	if(MsgType == "text"){
		var Content = select(doc, "//Content")[0].firstChild.data;
		xml = xml + '<Content><![CDATA['+ Content +']]></Content>'
	}
	xml = xml + '<MsgId>'+ MsgId +'</MsgId>';
	return xml;

}


module.exports = {
	handleXML: handleXML,
}