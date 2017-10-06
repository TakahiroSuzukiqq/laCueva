const mongoose = require('mongoose');
const { Schema } = mongoose;
const BlogSchema = new Schema ({
	name: {
		type: String,
		trim: true
	},
	blog_id: {
		type: String
	},
	title: {
        type: String
    },
    contents: {
        type: String
    },
	created_at: {
		type: Date,
		default: Date.now
	},
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
 