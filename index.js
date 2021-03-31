var http = require('http');

http.createServer(function (req, res){
    res.end('Quang Long');
}).listen(process.env.PORT || 3000);
