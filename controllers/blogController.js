const mongoose = require('mongoose');
const Blog = require('../models/Blog');

// Get Book
exports.getBlog = (req, res) => {
    res.render('blog', {
        title: 'Blogs Page'
	})
};
