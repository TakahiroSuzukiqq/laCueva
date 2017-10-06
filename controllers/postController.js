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
                subtitle: 'Enjoy Your Meal'
			})
		})
};


// exports.getNewQuestionnaires = (req, res) => {
// 	// console.log('TESTreq.body is:', req.body);
// 	const name = req.body.questionnaire_name;
// 	const question_type = req.body.question_type;
// 	const dropdown_action = req.body.dropdown_action;
// 	const qa_key = req.body.qa_key_name;
// 	let questionnaire = new Questionnaire();
// 	questionnaire.name = name;
// 	questionnaire.question_type = dropdown_action;
// 	questionnaire.qa_key = qa_key;
// 	questionnaire.save()
// 		.then(() => {
// 			res.redirect('/questionnaire')
// 		})
// };