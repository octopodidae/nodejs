var http = require('http');

var monmodule = require('./test');


var server = http.createServer(function(req, res) {
    res.writeHead(200);
    monmodule.direBonjour();
    monmodule.direByeBye();

    res.end('Salut tout le monde !');
});

/*server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})*/

server.listen(8080); // Démarre le serveur

/*var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message);
});*/

//jeu.emit('gameover', 'Vous avez perdu !');

//server.close(); // Arrête le serveur. Déclenche l'évènement close

/*var http = require('http');
var url = require('url');
var querystring = require('querystring');

/*var instructionsNouveauVisiteur = function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-type": "text/plain", "tutu": "toto"})

    if(page == '/')
        res.write('home');
    else if (page == '/page1') {
        res.write('page1');
    }
    else if (page == '/page2') {
        res.write('page2');
    } else {
        res.write( 'Error 404 - page not found ');
    }
    /!*res.write('Bien le bonjour'

        /!*'<!DOCTYPE html>'+
        '<html>'+
        '    <head>'+
        '        <meta charset="utf-8" />'+
        '        <title>Ma page Node.js !</title>'+
        '    </head>'+
        '    <body>'+
        '     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
        '    </body>'+
        '</html>'*!/
    );*!/
    res.end();
};

var server = http.createServer(function(req, res)
{
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-type": "text/plain"});

    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    } else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
    }
    res.writeHead(200);

    res.end('Salut tout le monde !!!');

});

server.on('close', function() {
    console.log('Bye Bye !');
});

server.listen(8080);

server.close();*/

//console.log('Bienvenue dans Node.js !');