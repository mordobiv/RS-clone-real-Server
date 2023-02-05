const Session = require('../models/session');


exports.session_all = async function(req, res) {
  console.log('wtf')
  const sessions = await Session.find({});
  res.send(sessions);
}

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
  res.send('Success');
};
