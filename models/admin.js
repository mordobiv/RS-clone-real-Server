const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  username: {type: String, required: true},
  mail: {type: String, required: true},
  password: {type: String, required: true},
});

AdminSchema.virtual('url').get(() => `/admin/${this._id}`);

module.exports = mongoose.model('Admin', AdminSchema);
