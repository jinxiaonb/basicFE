// fis.set('timeDate', Date.now());
// fis.match('*', {
// 	query: '?t=' + fis.get('timeDate')
// });

//发布到cdn上对应的文件加上cdn路径
//fis.match('*.css',{
//	domain:'http://cdn.baidu.com'
//});
// fis.match('*.js',{
// 	domain:'http://cdn.baidu.com'
// });

//设置时间戳
//fis.set('date', new Date);
// fis.match('*.{js,css,png}', {
// 	query: '?t=' + (fis.get('date').getYear() + 1900) + (fis.get('date').getMonth() + 1) + (fis.get('date').getDate())
// });

//将静态资源文件构建到static目录下
// fis.match('*.{png,js,css}', {
// 	useHash: true
// });
// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });

fis.match('*.html', {
	userMap: true
});
//md5
fis.match('*.{js,css,png,jpg,gif}', {
	useHash: true
});


// fis.match('*.js', {
// 	optimizer: fis.plugin('uglify-js')
// });


// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });
// 
// 发布到指定的本地目录下
// fis.match('*', {
// 	deploy: fis.plugin('local-deliver', {
// 		to: 'E:/fis/htdocs'
// 	})
// });