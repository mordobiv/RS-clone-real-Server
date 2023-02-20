const Session = require('../models/session');


exports.session_all = async function(req, res) {
  const sessions = await Session.find({});
  res.send(sessions);
}

exports.session_detail = async function(req, res) {
  console.log(1);
  try {
    console.log(req.params.id);
    const session = await Session.findById(req.params.id);
    res.send(session);
  } catch {
    res.status(404).send('Session is not found');
  }
};

exports.session_create = async function(req, res) {
  const session = req.body;
  const doctorId = session.doctorId;
  const clientId = session.clientId;
  const date = session.date;

  const sessionDetail = {
    doctorId,
    clientId,
    date,
  };
  const newSession = new Session(sessionDetail);
  newSession.save();
  res.send(newSession);
};
