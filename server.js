//console.log('salut les dev11');
const http =  require('http');
const fs = require('fs'); // manipuler des fichiers
const tools = require('./lib/tools');

//const myHello = require('./lib/hello');
//myHello.hello();

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {

    let pathName = req.url;
    let page = pathName.substring(1);

    if (page.length <1 )  {
        page = 'index';
    }

    //console.log(page);

    fs.readFile('html/' + page + '.html', (err, data ) => {

        if(err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(tools.getErrorPage());
        } else {

            //console.log(err);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });


    /*request('http://www.site.com/fichier.zip', function (error, response, body) {
        console.log("Fichier téléchargé !");
    });
    console.log("Je fais d'autres choses en attendant...");*/

});

server.listen(port, hostname, () => {});

