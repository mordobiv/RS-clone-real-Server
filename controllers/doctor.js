const Doctor = require('../models/doctor');


// exports.client_detail = async function(req, res) {
//   try {
//     const client = await Client.findById(req.params.id);
//     res.send(client);
//   } catch {
//     res.status(404).send('User is not found');
//   }
// };

exports.doctor_create = async function(req, res) {
  const user = req.body;
  const username = user.username;
  const password = user.password;
  const mail = user.mail;
  const name = user.name;
  const specialization = user.specialization;

  const doctor = await Doctor.findOne({username});
  if (doctor) {
    res.status(404).send('This username is already taken');
    return;
  }

  const doctorDetail = {
    name,
    username,
    mail,
    password,
    specialization,
  };
  const newDoctor = new Doctor(doctorDetail);
  newDoctor.save();
  res.send('Success');
};
