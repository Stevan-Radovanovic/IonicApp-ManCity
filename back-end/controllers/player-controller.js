const Player = require('../models/player-model');

exports.GetAllPlayers = async (req, res, next) => {
  try {
    const documents = await Player.find();
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
  });

  try {
    const response = await player.save();
    res.status(201).json({ signal: true });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};