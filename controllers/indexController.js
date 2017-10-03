// const Index = require('')
exports.myMiddleware = (req, res, next) => {
    req.name = "ラクエバ";
    res.cookie('name', 'La Cueva is cool', { maxAccomodation: 9800});
    if(req.name != "ラクエバ") {
        throw Error('Eat yum-yum La Cueva foods');
    }
    next();
}

exports.getIndexpage = (req, res) => {     //this function will be called after the myMiddleware function is called
    console.log(req.name);
    res.render('index', {                  //'index' is name for a file in views folder
        title: 'Welcome to La Cueva',
        subtitle: 'Enjoy your meal'
    })
};

