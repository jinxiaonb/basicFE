define(['JReq'], function(JReq) {

	var initReq = function(para, callback) {
		JReq.initAjax(para, callback);
	}

	var initEvent = function() {}


	return {
		initReq: initReq,
		initEvent: initEvent
	}
});