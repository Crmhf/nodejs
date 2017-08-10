var http = require('http');

var server = http.createServer(function(req,res){
	if(req == '/'){
		// 显示try页面
		fs.readFile('./try.html',function(err,data){
			res.end(data);
		});
	}
});

var io = require('socket.io')(server);
io.on('connection',function(){
	console.log('一个连接开始了');
});

server.listen(3800,'127.0.0.1');