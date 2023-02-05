const Specialization = require('../models/specialization');


exports.specialization_all = async function(req, res) {
  const specializations = await Specialization.find({});
  res.send(specializations);
}

exports.specialization_detail = async function(req, res) {
  try {
    const specialization = await Specialization.findById(req.params.id);
    res.send(specialization);
  } catch {
    res.status(404).send('Specialization is not found');
  }
};

exports.specialization_create = async function(req, res) {
  const name = req.body.name;
  console.log(name);
  const specialization = await Specialization.findOne({name});
  if (specialization) {
    res.status(404).send('This name is already taken');
    return;
  }
  const specializationDetail = {
    name,
  };

  const newSpecialization = new Specialization(specializationDetail);
  newSpecialization.save();
  res.send('Success');
};
