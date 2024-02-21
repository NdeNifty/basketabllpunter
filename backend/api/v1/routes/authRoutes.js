// authRoutes.js
const express = require('express');
const passport = require('../config/passport');
const authController = require('../controllers/authController');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/auth/signup', authController.signup);
router.post('/auth/login', authController.login);

// // Protect the route with middleware to verify token
// router.post('/auth/signup', authenticateToken, authController.signup);
// router.post('/auth/login', authenticateToken, authController.login);

// // Middleware to verify JWT token
// function authenticateToken(req, res, next) {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ error: 'Unauthorized' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ error: 'Forbidden' });
//     req.user = user;
//     next();
//   });
// }

module.exports = router;
