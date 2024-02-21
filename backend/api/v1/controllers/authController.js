const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authController = {
  signup: async (req, res) => {
    try {
      const { email, password } = req.body;
      const newUser = new User({ email, password });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }) ;

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = authController;
