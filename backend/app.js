
require('dotenv').config({ path: "../.env" })
const express = require('express');
const  passport  = require('passport');
const mongoose = require('./api/v1/config/mongoose');
const { json } = require('body-parser');

const authRoutes = require('./api/v1/routes/authRoutes');
const googleAuthRoutes = require('./api/v1/routes/googleAuthRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(json());
app.use(passport.initialize());

// Routes
app.use(authRoutes);
app.use(googleAuthRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
