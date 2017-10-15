const mongoose = require('mongoose');
const Post = require('../models/Post');


// Test getPost
// exports.getPost = (req, res) => {
//     res.send('It works')
// };

// Get Post
exports.getPost = (req, res) => {
    Post.find()
        .then((post) => {                      
			res.render('post', {              //Render post view == template
                title: 'La Cueva Menu Page',
                subtitle: 'Enjoy Your Meal',
                post: post
			})
		})
};

// Post NewPost
exports.getNewPost = (req, res) => {
	console.log('TEST req.body is:', req.body);
    const unique_key = req.body.unique_key;
	const foodName = req.body.foodName;
	const foodDescription = req.body.foodDescription;
	const price = req.body.price;
	let post = new Post();
    post.qa_key = unique_key ;
	post.name = foodName;
    post.foodDescription = foodDescription;
	post.price = price;
	post.save()
		.then(() => {
			res.redirect('/post')
		})
};

// Test
exports.getPostedId = (req, res, next) => {
    res.render('post', {
      }); 
};