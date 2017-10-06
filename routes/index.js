var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');
const postController = require('../controllers/postController');
const bookController = require('../controllers/bookController');
const staffController = require('../controllers/staffController');

/* GET home page. */
//router.get('/', indexController.getIndexpage);
router.get('/', indexController.myMiddleware, indexController.getIndexpage);

/* POST NEW GET */
//router.get('/post', indexController.getPost);
/* Refactoring devide the indexController */ 
router.get('/post', postController.getPost);

/* GET BOOK */ 
router.get('/book', bookController.getBook);

/* GET STAFF */ 
router.get('/staff', staffController.getStaff);

module.exports = router;

 