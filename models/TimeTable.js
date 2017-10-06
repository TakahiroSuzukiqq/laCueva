const mongoose = require('mongoose');
const { Schema } = mongoose;
const TimeTableSchema = new Schema ({
	name: {
		type: String,
		trim: true
	},
	staffID_: {
		type: String
	},
    staffShift: {
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
    //  +Photo image? +

const TimeTable = mongoose.model('TimeTable', TimeTableSchema);

module.exports = TimeTable;
 