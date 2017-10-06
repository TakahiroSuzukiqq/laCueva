const mongoose = require('mongoose');
const Book = require('../models/Book');

// Get Book
exports.getBook = (req, res) => {
    res.render('book', {
        title: 'Booking Page'
	})
};

// For the restrant they want to check the list of all the booking( with a calender?)

// For the customer they want to confirm their booking detail => unique key?
