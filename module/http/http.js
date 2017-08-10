// 使用http的模块
// 引用模块
var http = require('http');

// 创建一个服务器
var server = http.createServer(function(req,res){
	console.log("服务器接收到了请求" + req.url);
	res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
	res.write('<h1>我是主标题！</h1>');
	res.write('<h2>我是2标题！</h2>');
	res.write('<h3>我是3标题！</h3>');
	res.end();
});

server.listen(3000,'127.0.0.1');