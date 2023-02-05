const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpecializationSchema = new Schema({
  name: {type: String, required: true},
});

SpecializationSchema.virtual('url').get(() => `/specialization/${this._id}`);

module.exports = mongoose.model('Specialization', SpecializationSchema);
