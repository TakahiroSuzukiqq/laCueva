const mongoose = require('mongoose');
const { Schema } = mongoose;
const StaffSchema = new Schema ({
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
	}
});
    //  +Photo image? +

const Staff = mongoose.model('Staff', StaffSchema);

module.exports = Staff;
 