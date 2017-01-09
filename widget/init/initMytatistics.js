require(['jquery', 'footer', 'mytatistics', 'mytatisticsBean'], function(jQuery, footer, mytatistics, mytatisticsBean) {

	footer.setActiveNav("person");

	mytatistics.initReq({
		url: "/test/mytatistics.json"
	}, mytatisticsBean.initData);

	mytatistics.initEvent();
});