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
    staff: {
		unique_key: String,
		name: String,
        shift: String,
		hours: Number
	},
    created_at: {
		type: Date,
		default: Date.now
	}
});

const Staff = mongoose.model('Staff', StaffSchema);

module.exports = Staff;
 