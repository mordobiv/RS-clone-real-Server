const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true},
  mail: {type: String, required: true},
  password: {type: String, required: true},
});

ClientSchema.virtual('url').get(() => `/client/${this._id}`);

module.exports = mongoose.model('Client', ClientSchema);
