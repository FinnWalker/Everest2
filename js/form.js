const sanitize = require("mongo-sanitize");
const Player = require("./player.js");
const uuid = require("uuid");

function form(req, res) {
  const eligible = sanitize(req.body.eligible);
  const terms = sanitize(req.body.terms);
  const first_name = sanitize(req.body.first_name);
  const last_name = sanitize(req.body.last_name);
  const player_name = sanitize(req.body.player_name);
  const date_of_birth = sanitize(req.body.date_of_birth);
  const mobile = sanitize(req.body.mobile);
  const email = sanitize(req.body.email);
  const customer = sanitize(req.body.customer);
  const marketing = sanitize(req.body.marketing);

  if (
    eligible !== null &&
    terms !== null &&
    first_name !== null &&
    last_name !== null &&
    player_name !== null &&
    date_of_birth !== null &&
    mobile !== null &&
    email !== null &&
    customer !== null &&
    marketing !== null
  ) {
    const newPlayer = new Player({
      id: uuid.v4(),
      eligible,
      terms,
      first_name,
      last_name,
      player_name,
      date_of_birth,
      mobile,
      email,
      customer,
      marketing,
      steps: 0
    });
    newPlayer.save().then(() => {
      res.status(200).json({ message: "Player added", player: newPlayer });
    });
  } else {
    res.status(300).json({ message: "Please include all fields" });
  }
}

module.exports = form;
