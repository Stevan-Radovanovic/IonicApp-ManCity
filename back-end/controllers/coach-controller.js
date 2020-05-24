const Coach = require('../models/coach-model');

exports.GetAllCoaches = async (req, res, next) => {
  try {
    const documents = await Coach.find();
    res.status(200).json({ documents: documents });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.GetCoachesByEmail = async (req, res, next) => {
  try {
    console.log(req.query.email);
    const documents = await Coach.find({ email: req.query.email });
    res.status(200).json({ documents: documents });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.PostCoach = async (req, res, next) => {
  const coach = new Coach({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    email: req.query.email,
  });

  try {
    const response = await coach.save();
    res.status(201).json({ signal: true });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.DeleteCoach = async (req, res, next) => {
  try {
    const response = await Coach.findByIdAndDelete(req.query.id);
    res.status(201).json({ signal: true });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
