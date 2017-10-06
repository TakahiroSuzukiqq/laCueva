const mongoose = require('mongoose');
const { Schema } = mongoose;
const BookSchema = new Schema ({
	name: {
		type: String,
		trim: true
	},
	unique_key: {
		type: String
	},
	booking: {
		unique_key: String,
		name: String,
		book_date: Date,
		book_number: Number,
		preOrder: String,
		created_at: Date,
	},
	created_at: {
		type: Date,
		default: Date.now
	},
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
 