const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

exports.Register = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      email: req.body.email,
      username: req.body.userName,
      password: hash,
    });
    const result = await user.save();
    res.status(201).json({
      signal: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Sign Up Failed' });
  }
};

exports.LogIn = async (req, res, next) => {
  try {
    const fetchedUser = await User.findOne({ email: req.body.email });
    if (!fetchedUser) {
      return res.status(401).json({
        message: 'Log In failed',
      });
    }
    const compareResult = await bcrypt.compare(
      req.body.password,
      fetchedUser.password
    );
    if (!compareResult) {
      return res.status(401).json({
        message: 'Log In failed',
      });
    }
    const token = jwt.sign(
      { email: fetchedUser.email, id: fetchedUser._id },
      'secret',
      {
        expiresIn: '1h',
      }
    );
    res.status(200).json({
      token: token,
    });
  } catch (err) {
    res.status(401).json({
      message: 'Log In failed',
    });
  }
};
