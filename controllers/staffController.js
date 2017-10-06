const mongoose = require('mongoose');
const Staff = require('../models/Staff');

// Get Book
exports.getStaff = (req, res) => {
    res.render('staff', {
        title: 'Staff Time Table Page'
	})
};
