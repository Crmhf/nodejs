var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){

	// url.parse()可以将一个完整的URL地址，分为很多个部分
	var path = url.parse(req.url).pathname;
	var query = url.parse(req.url).query;
	console.log(path);
	console.log(query);
	res.end();
});

server.listen(3000,'127.0.0.1');