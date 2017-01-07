define([], function() {


	var setActiveNav = function(msg) {
		$('#footer_line').load('/views/footer_line.html', function() {
			$("." + msg).siblings("li").removeClass("selected").end().addClass("selected");
		});
	}

	return {
		setActiveNav: setActiveNav
	}
});