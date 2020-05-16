const Player = require('../models/player-model');

exports.GetAllPlayers = async (req, res, next) => {
  try {
    const documents = await Player.find();
    res.status(200).json({ documents: documents });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.PostPlayer;
