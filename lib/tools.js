const fs = require('fs');

var getErrorPage = function () {
    return fs.readFileSync('html/404.html');
}


module.exports = {
 getErrorPage: getErrorPage
};