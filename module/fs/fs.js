var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	// 不处理小图标
	if(req.url == '/favicon.ico'){
		return;
	}

	// 存储所有的文件夹
	var folder = [];

	// stat检测状态
	fs.readdir('./album',function(err,files){
		// files是一个数组，表示./album这个文件夹中所有的文件
		// 包括文件、文件夹
		for(var i=0,len=files.length; i<len; i++){
			var thefilename = files[i];
			// 又要进行一次检测
			fs.stat('./album/' + thefilename,function(err,status){
				if(status.isDirectory()){
					folder.push(thefilename);
				}
			});
		}
		console.log(folder);
	})
});

server.listen(3000,'127.0.0.1');