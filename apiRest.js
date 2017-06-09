const http =  require('http');
const hostname = '127.0.0.1';
const port = 3001;



const server = http.createServer((req, res) => {

    if(req.method == 'POST') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'appplication/json');
        res.end(JSON.stringify({"a" : "salut post"}));
    }

    if(req.method == 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'appplication/json');
        res.end(JSON.stringify({"a" : "salut get"}));
    }

    if(req.method == 'DELETE') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'appplication/json');
        res.end(JSON.stringify({"a" : "salut delete"}));
    }

});

server.listen(port, hostname, () => {});

