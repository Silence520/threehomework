module.exports=function (templateParams) {
	var _cssList=['index'];
	var webAssetsHelp=require('./webAssetsHelp.js')(templateParams,_cssList);
	var _html="{% extends 'layout.html' %}"+
	"{% block title %}my page{% endblock %}"+
	"{% block styles %}"+
	webAssetsHelp.styles+
	"{% endblock %}"+
	"{% block content %}{% include '../widget/index.html' %}{% endblock %}"+
	"{% block script %}"+
	webAssetsHelp.scripts+
	"{% endblock %}";
	console.log(_html)
	return _html;

}