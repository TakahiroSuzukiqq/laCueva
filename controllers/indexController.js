// const Index = require('')
const mongoose = require('mongoose');
const Post = require('../models/Post');

// Middleware
exports.myMiddleware = (req, res, next) => {
    req.name = "ラクエバ";
    res.cookie('name', 'La Cueva is cool', { maxAccomodation: 9800});
    if(req.name != "ラクエバ") {
        throw Error('Eat yum-yum La Cueva foods');
    }
    next();
}

// Index
exports.getIndexpage = (req, res) => {     //this function will be called after the myMiddleware function is called
    console.log(req.name);
    res.render('index', {                  //'index' is name for a file in views folder
        title: 'Welcome to La Cueva',
        subtitle: 'The best spanish cuisine restaurant in Japan'
    })
};
// // Get Post
// exports.getPost = (req, res) => {
//     Post.find()
//         .then((post) => {
// 			res.render('index', {
//                 title: 'La Cueva Menu Page',
//                 subtitle: 'Enjoy Your Meal'
// 			})
// 		})
// };