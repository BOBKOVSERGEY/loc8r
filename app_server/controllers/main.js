/*получаем GET домашнуюю страницу*/
module.exports.index = function (req, res) {
    res.render('index', {title: '1Express'})
};