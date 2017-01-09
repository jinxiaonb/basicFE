require(['jquery', 'footer_line', 'niuniu'], function(jQuery, footer_line, niuniu) {

	console.log("......");
	footer_line.setActiveNav("niuniu");

	niuniu.initReq({
		url: "/test/niuniu.json"
	}, niuniuBean.initData);

	niuniu.initEvent();
});