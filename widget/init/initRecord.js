require(['jquery', 'footer', 'record', 'recordBean'], function(jQuery, footer, record, recordBean) {

	footer.setActiveNav("person");

	record.initReq({
		url: "/test/record.json"
	}, recordBean.initData);

	record.initEvent();
});