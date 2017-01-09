define(['JTip'], function(JTip) {

	var initEvent = function() {

		//公告事件
		$(document).on("click", ".notice", function() {
			var _this = $(this);

			JTip.bd({
				message: "<h3>开奖数据：</h3><p>本平台所有游戏全部采用官方数据(马尔其他飞艇是采用欧洲马耳他共和国飞艇数据)，公平透明，童叟无欺。发现平台数据做假、用外挂，任何一个玩家都可以截图发到群里，当场退还你所有充值金额再陪你10000现金，欢迎各位监督。</p><h3>撤单阅读：</h3><p>由于开奖不是我们自己开，采用官方数据，官方开奖偶尔会延时或者漏开，如果出现官方开奖延时或者漏开，我们等待20分钟，20分钟后官方有开就补奖，20分钟官方没开就统一全部撤单退本给大家，<em>如果我们出现统一撤单后，官方再开奖的，平台都将不再补开。</em></p><h3>提现告知：</h3><p>所有提现请私聊值班财务，这样会更快的给您到账，谢谢配合！</p><h3>关于记录：</h3><p>系统保留24小时之内的所有资金变动记录，对资金变动有疑问的请在24之内提出。</p>",
				link: "javascript:void(0);",
				btnStr: "知道了",
				JCallback: function() {}
			});
		});

		//邀请、收藏
		$(document).on("click", ".notice", function() {
			var _this = $(this);
		});
	}


	return {
		initEvent: initEvent
	}
});