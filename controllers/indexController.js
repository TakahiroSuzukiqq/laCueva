// const Index = require('')

exports.getIndexpage = (req, res) => {
    res.render('index', {                  //'index' is name for a file in views folder
        title: 'Welcome to La Cueva',
        subtitle: 'Enjoy your meal'
    })
};

