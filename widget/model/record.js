define(['JReq'], function(JReq) {

	var initReq = function(para, callback) {
		JReq.initAjax(para, callback);
	}

	var initEvent = function() {

		//tab切换
		$(document).on("click", ".tab-event", function(event) {
			var _this = $(this),
				_target = "." + _this.attr("data-target");

			_this.parent("li").siblings("li").removeClass("selected");
			_this.parent("li").addClass("selected");

			$(".tab-common").addClass("hidden");
			$(_target).removeClass("hidden");
		});
	}


	return {
		initReq: initReq,
		initEvent: initEvent
	}
});