const Client = require('../models/client');
const Doctor = require('../models/doctor');
const Admin = require('../models/admin');
const Specialization = require('../models/specialization');
const Session = require('../models/session');

exports.login = async function(req, res) {
  const user = req.body;
  const username = user.username;
  const password = user.password;
  try {
    const client = await Client.findOne({username});
    if (client.password === password) res.send(composeLoginResponse(client, 'client'));
    else res.status(404).send('Password is incorrect');
  } catch {
    try {
      const admin = await Admin.findOne({username});
      if (admin.password === password) res.send(composeLoginResponse(admin, 'admin'));
      else res.status(404).send('Password is incorrect');
    } catch {
      try {
        const doctor = await Doctor.findOne({username});
        if (doctor.password === password) res.send(composeLoginResponse(doctor, 'doctor'));
        else res.status(404).send('Password is incorrect');
      } catch {
        res.status(404).send('User is not found');
      }
    }
  }
}

function composeLoginResponse(user, role){
  return {
    _id: user.id,
    username: user.username,
    role,
  };
}

exports.delete_node = async function(req, res) {
  const model = getModelToUse(req.originalUrl);

  await model.findByIdAndDelete(req.params.id);
  res.send();
}

exports.update_node = async function(req, res) {
  const model = getModelToUse(req.originalUrl);

  await model.findByIdAndUpdate(req.params.id, req.body)
  res.send();
}

function getModelToUse(originalUrl) {
  const urlPart = originalUrl.split('/')[1];
  switch (urlPart) {
    case 'clients':
      return Client;
    case 'doctors':
      return Doctor;
    case 'admins':
      return Admin;
    case 'sessions':
      return Session;
    case 'specializations':
      return Specialization;
  }
}