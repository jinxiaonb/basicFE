define(['jquery', 'client'], function(jQuery, client) {

	function createHtml(opts) {
		//console.log(opts.link);
		var mask = $("<div class='JTmask'></div>"),
			JTip = $("<div class='JTip'>"),
			JTTitle = $("<div class='JTTitle'><span class='JTitle'>" + opts.title + "</span><a href='javascript:void(0);' class='JTClose'>X</a></div>"),
			JTContent = $("<div class='JTContent'>" + opts.message + "</div>");

		JTBtn = $("<div class='JTBtn'>");
		jxd_submit = $("<a href=" + opts.link + ">" + opts.btnStr + "</a>");

		JTip.append(JTTitle);
		JTip.append(JTContent);
		//JTBtn.append(jxd_submit);

		JTip.append(JTBtn);

		var c_client = client.client();
		$("body").append(mask);
		$(".JTmask").height(c_client.c_d_height);

		$("body").append(JTip);
		$(".JTip").css({
			"top": c_client.c_scroll_top + 40
		});
	}

	function btnEvent(opts) {
		$(document).on("click", ".JTBtn a", function() {
			$(".JTmask").remove();
			$(".JTip").remove();
			opts.JCallback();
		});

		$(document).on("click", ".JTClose", function() {
			$(".JTmask").remove();
			$(".JTip").remove();
		});
	}

	var bd = function(options) {
		var defaults = {
			title: "标题",
			message: "成功",
			link: "javascript:void(0);",
			btnStr: "知道了",
			JCallback: function() {}
		};

		var opts = $.extend({}, defaults, options);

		createHtml(opts);
		btnEvent(opts);
		// dialogEvent(DialogJson.JCallback);

	};

	return {
		bd: bd
	}
});