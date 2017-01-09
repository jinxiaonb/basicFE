require.config({
	paths: {
		"jquery": "/static/lib/jquery",
		"client": "/widget/common/client",
		"footer": "/widget/common/footer",
		"footer_line": "/widget/common/footer_line",

		"JTip": "/widget/plugin/JTip/JTip",
		"JReq": "/widget/util/JReq",

		"niuniu": "/widget/model/niuniu", //北京牛牛
		"niuniuBean": "/widget/bean/niuniuBean",


		"index": "/widget/model/index", //首页

		"record": "/widget/model/record", //投资记录
		"recordBean": "/widget/bean/recordBean", //投资记录数据渲染
		"mytatistics": "/widget/model/mytatistics", //投资记录
		"mytatisticsBean": "/widget/bean/mytatisticsBean", //投资记录数据渲染
		"statistics": "/widget/model/statistics", //投资记录
		"statisticsBean": "/widget/bean/statisticsBean" //投资记录数据渲染
	},
	waitSeconds: 10,
	map: {
		'*': {
			'css': '/static/lib/css.js'
		}
	},
	shim: {
		'JTip': {
			deps: ['jquery', 'css!/widget/plugin/JTip/JTip.css'],
			exports: "JTip"
		}
	}
});

// require.config({
// 	paths: {
// 		"jquery": __uri("lib/jquery.js")
// 	},
// 	waitSeconds: 10
// });