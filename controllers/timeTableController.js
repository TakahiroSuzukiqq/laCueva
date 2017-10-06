const mongoose = require('mongoose');
const TimeTable = require('../models/TimeTable');

// Get Book
exports.getTimeTable = (req, res) => {
    res.render('timetable', {
        title: 'Staff Time Table Page'
	})
};
