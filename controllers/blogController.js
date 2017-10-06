const mongoose = require('mongoose');
const Book = require('../models/Blog');

// Get Book
exports.getBlog = (req, res) => {
    res.render('blog', {
        title: 'Blogs Page'
	})
};
