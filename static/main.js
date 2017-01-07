require.config({
	paths: {
		"jquery": "/static/lib/jquery",
		"footer": "/widget/common/footer",
		"footer_line": "/widget/common/footer_line",

		"JReq": "/widget/util/JReq",


		"record": "/widget/model/record", //投资记录
		"recordBean": "/widget/bean/recordBean" //投资记录数据渲染
	},
	waitSeconds: 10
});

// require.config({
// 	paths: {
// 		"jquery": __uri("lib/jquery.js")
// 	},
// 	waitSeconds: 10
// });