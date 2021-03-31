var http = require('http');

http.createServer(function (req, res){
    res.end('HiHi');
}).listen( process.env.PORT || 3030);
