const Client = require('../models/client');


exports.client_detail = async function(req, res) {
  try {
    const client = await Client.findById(req.params.id);
    res.send(client);
  } catch {
    res.status(404).send('User is not found');
  }
};

exports.client_delete = async function(req, res) {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.send('200');
  } catch {
    res.status(404).send('User is not found');
  }
}

exports.client_create = async function(req, res) {
  const user = req.body;
  const username = user.username;
  const password = user.password;
  const mail = user.mail;
  const name = user.name;

  const client = await Client.findOne({username});
  if (client) {
    res.status(404).send('This username is already taken');
    return;
  }

  const clientDetail = {
    name,
    username,
    mail,
    password,
  };
  const newClient = new Client(clientDetail);
  newClient.save();
  res.send(newClient);
};
