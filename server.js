const express = require('express');
const path = require('path');

//To protect env variables and use process.env
require('dotenv').config();

// Database setup
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

// Middleware
app.use(express.json());

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//!UNCOMMENT FOR PRODUCTION
// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set the static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
