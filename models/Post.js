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
	posting: {
		unique_key: String,
		foodName: String,
		foodDescription: String,
		price: Number,
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
 