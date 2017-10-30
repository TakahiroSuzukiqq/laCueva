var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');
const postController = require('../controllers/postController');
const bookController = require('../controllers/bookController');
const staffController = require('../controllers/staffController');
const timeTableController = require('../controllers/timeTableController');
const blogController = require('../controllers/blogController');


/*  INDEX  */ 
/* GET home page. */
//router.get('/', indexController.getIndexpage);
router.get('/', indexController.myMiddleware, indexController.getIndexpage);
router.get('/googleMap', indexController.getGoogleMap);

/*  POST  */ 
/* POST NEW GET */
//router.get('/post', indexController.getPost);
/* Refactoring devide the indexController */ 
router.get('/post', postController.getPost);
router.post('/post', postController.getNewPost);
/* TEST */ 
router.get('post/:id', postController.getPostedId);


/*  BOOK  */ 
/* GET BOOK */ 
router.get('/book', bookController.getBook);


/*  STAFF  */ 
/* GET STAFF */ 
router.get('/staff', staffController.getStaff);


/* TIME TABLE */
router.get('/timetable', timeTableController.getTimeTable);


/* BLOGS */ 
router.get('/blog', blogController.getBlog);



module.exports = router;

 