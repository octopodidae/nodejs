var mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
var Article = mongoose.model('Article', {
    title: String,
    slug: {type: String, slug: 'title'},
    content: String
});



let createArticle = function createArticle(title, content) {

    let newArticle = new Article({title: title, content: content});
    newArticle.save(function (err) {

        if (err) {
            console.log(err);
        } else {
            console.log('article created');
        }

    });
};

const database = {
    mongoose: mongoose,
    createArticle: createArticle,
    Article: Article,

};

module.exports = database;