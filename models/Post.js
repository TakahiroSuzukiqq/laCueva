const mongoose = require('mongoose');
const { Schema } = mongoose;
const PostSchema = new Schema ({
	name: {
		type: String,
		trim: true
	},
	unique_key: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	booking: {
		unique_key: String,
		name: String,
		booking_type: String,
		created_at: Date,
	}
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
 