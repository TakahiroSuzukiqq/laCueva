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
	// posting: {
	// 	unique_key: String,
	// 	foodName: String,
	// 	foodDescription: String,
	// 	price: Number,
	// },
	foodName: {
		type: String
	},
	foodDescription: {
		type: String
	},
	price: {
		type: Number
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

//  +Photo image? +

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;