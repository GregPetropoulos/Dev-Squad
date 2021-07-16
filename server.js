const express= require('express');

// Database setup
const connectDB =require ('./config/db');

const app=express();

// Connect database
connectDB();


// Middleware
app.use(express.json());

// Test API
app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on Port ${PORT}`));