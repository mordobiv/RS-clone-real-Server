const Admin = require('../models/admin');

exports.admin_create = async function(req, res) {
  const admin = req.body;
  
  const username = admin.username;
  const password = admin.password;
  const mail = admin.mail;

  const user = await Admin.findOne({username});
  if (user) {
    res.status(404).send('This username is already taken');
    return;
  }

  const adminDetail = {
    username,
    mail,
    password,
  };

  const newAdmin = new Admin(adminDetail);
  newAdmin.save();
  res.send(newAdmin);
};
