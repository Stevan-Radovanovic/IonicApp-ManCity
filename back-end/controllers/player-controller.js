const Player = require('../models/player-model');

exports.GetAllPlayers = async (req, res, next) => {
  try {
    const documents = await Player.find();
    res.status(200).json({ documents: documents });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.GetPlayersByEmail = async (req, res, next) => {
  try {
    console.log(req.query.email);
    const documents = await Player.find({ email: req.query.email });
    res.status(200).json({ documents: documents });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.PostPlayer = async (req, res, next) => {
  const player = new Player({
    name: req.body.name,
    jerseyNumber: req.body.jerseyNumber,
    imageUrl: req.body.imageUrl,
    email: req.query.email,
  });

  try {
    const response = await player.save();
    res.status(201).json({ signal: true });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.DeletePlayer = async (req, res, next) => {
  try {
    const response = await Player.findByIdAndDelete(req.query.id);
    res.status(201).json({ signal: true });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
