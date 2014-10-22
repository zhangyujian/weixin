var select = require('xpath.js')
    , dom = require('xmldom').DOMParser;


exports.handleXML = function(source){
	var doc = new dom().parseFromString(source); 
    var MsgType = select(doc, "//MsgType")[0].firstChild.data;
    var username = select(doc, "//ToUserName")[0].firstChild.data;
    var fusername = select(doc, "//FromUserName")[0].firstChild.data;
    var CreateTime = select(doc, "//CreateTime")[0].firstChild.data;
    var MsgId = select(doc, "//MsgId")[0].firstChild.data;

    var xml ='<xml>'
			+'<ToUserName><![CDATA['+fusername+']]></ToUserName>'
			+'<FromUserName><![CDATA['+username+']]></FromUserName>'
			+'<CreateTime>'+CreateTime+'</CreateTime>';
	if(MsgType == "text"){
		xml = xml + '<MsgType><![CDATA[news]]></MsgType><ArticleCount>2</ArticleCount>'
		+'<Articles>'
		+'<item>'
		+'<Title><![CDATA[第一篇测试文章]]></Title> '
		+'<Description><![CDATA[第一篇测试文章的描述]]></Description>'
		+'<PicUrl><![CDATA[http://upload.chinaz.com/2014/1016/1413428212775.jpg]]></PicUrl>'
		+'<Url><![CDATA[http://www.baidu.com]]></Url>'
		+'</item>'
		+'<item>'
		+'<Title><![CDATA[第二篇测试文章]]></Title>'
		+'<Description><![CDATA[第二篇测试文章的描述]]></Description>'
		+'<PicUrl><![CDATA[http://upload.chinaz.com/2014/1021/1413880631473.jpg]]></PicUrl>'
		+'<Url><![CDATA[http://www.xiangshang360.com]]></Url>'
		+'</item>'
		+'</Articles>'
		//var Content = select(doc, "//Content")[0].firstChild.data;
		//xml = xml + '<MsgType><![CDATA[text]]></MsgType><Content><![CDATA[文本：'+Content+']]></Content>'
	}
	else{
		xml = xml + '<MsgType><![CDATA[text]]></MsgType><Content><![CDATA[您发送的是一段非文本信息哦]]></Content>'
	}
	xml = xml + '<MsgId>'+MsgId+'</MsgId></xml>';
	return xml;

}