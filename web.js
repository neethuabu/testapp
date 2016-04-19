var http = require('http');
console.log(new Date().toString());
http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write("<p>" + new Date().toString() + ": starting response");
    setTimeout(function () {
        res.write("<p>" + new Date().toString() + ": completing response and closing connection</p>");
        res.end();
    }, 7000);
}).listen(8099);
