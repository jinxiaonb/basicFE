require(['jquery', 'footer', 'statistics', 'statisticsBean'], function(jQuery, footer, statistics, statisticsBean) {

	footer.setActiveNav("person");

	statistics.initReq({
		url: "/test/statistics.json"
	}, statisticsBean.initData);

	statistics.initEvent();
});