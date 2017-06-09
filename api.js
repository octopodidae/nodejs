const express = require('express');
const compression = require('compression');
var favicon = require('serve-favicon');
var path = require("path");
const bodyParser = require('body-parser');
const app = express();

app.listen(3002);

const database = require('./lib/database');
database.mongoose.connect('mongodb://localhost/blog');
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extends: true
}));

app.use(express.static('public'));

app.use(favicon(path.join(__dirname, '/public/images/', 'favicon.ico')));
/*console.log(path.join(__dirname, '/public/images/', 'favicon.ico'));*/
app.set('view engine', 'jade');
app.set('views', './views');


app
    .get('/', function (req, res) {
         database.Article.find(null, function(err, articles){
             res.render('index', {articles: articles});
        })
    })
    .get('/contact', function (req, res) {
        res.end('Contact page');
    })
    .post('/nouveau-article', function(req, res){
        database.createArticle(req.body.title, req.body.content);
        res.redirect('/');
    })
    .get('/article-remove/:article_slug', function (req, res) {
        database.Article.remove({slug: req.params.article_slug}, function(err) {
           /* console.log(req.params.article_slug);*/
            console.log('delete');
            res.redirect('/')
        });
    });
