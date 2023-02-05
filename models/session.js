const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  doctorId: {type: Schema.ObjectId, ref: 'Doctor', required: true},
  clientId: {type: Schema.ObjectId, ref: 'Client', required: true},
  date: {type: Date, required: true}
});

SessionSchema.virtual('url').get(() => `/session/${this._id}`);

module.exports = mongoose.model('Session', SessionSchema);
