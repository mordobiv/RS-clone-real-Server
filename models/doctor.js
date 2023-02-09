const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  image: {type: String, required: true},
  username: {type: String, required: true},
  mail: {type: String, required: true},
  password: {type: String, required: true},
  specialization: {type: Schema.ObjectId, ref: 'Specialization', required: true},
});


DoctorSchema.virtual('url').get(() => `/doctor/${this._id}`);

module.exports = mongoose.model('Doctor', DoctorSchema);
