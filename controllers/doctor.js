const Doctor = require('../models/doctor');


exports.doctor_detail = async function(req, res) {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.send(doctor);
  } catch {
    res.status(404).send('Doctor is not found');
  }
};

exports.doctor_all = async function(req, res) {
  const doctors = await Doctor.find({});
  res.send(doctors);
}

exports.doctor_create = async function(req, res) {
  const user = req.body;
  const username = user.username;
  const password = user.password;
  const mail = user.mail;
  const name = user.name;
  const surname = user.surname;
  const image = user.image;
  const specialization = user.specialization;

  const doctor = await Doctor.findOne({username});
  if (doctor) {
    res.status(404).send('This username is already taken');
    return;
  }

  const doctorDetail = {
    name,
    surname,
    image,
    username,
    mail,
    password,
    specialization,
  };
  const newDoctor = new Doctor(doctorDetail);
  newDoctor.save();
  res.send(newDoctor);
};
