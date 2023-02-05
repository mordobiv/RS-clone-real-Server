const Client = require('../models/client');
const Doctor = require('../models/doctor');
const Admin = require('../models/admin');

exports.login = async function(req, res) {
  const user = req.body;
  const username = user.username;
  const password = user.password;
  try {
    const client = await Client.findOne({username});
    if (client.password === password) res.send('200');
    else res.status(404).send('Password is incorrect');
  } catch {
    try {
      const admin = await Admin.findOne({username});
      if (admin.password === password) res.send('200');
      else res.status(404).send('Password is incorrect');
    } catch {
      try {
        const doctor = await Doctor.findOne({username});
        if (doctor.password === password) res.send('200');
        else res.status(404).send('Password is incorrect');
      } catch {
        res.status(404).send('User is not found');
      }
    }
  }
}
