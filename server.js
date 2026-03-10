//? middleware -> function runs b/w request and response
//? we will be using a middleware function to check the JWT

// todo)) Sign up using JWT and middleware function
//? 1️⃣ Register -> create user in MongoDB
//? 2️⃣ Login -> receive JWT token
//? 3️⃣ User Profile -> send token in headers
//? 4️⃣ Middleware function -> verify token
//? finally ACCESS GRANTED 🔓
//----------------------------------------------------------
//* REGISTER
//* --> store user in DB

//* LOGIN
//* --> verify password
//* --> generate JWT token
//* --> send the token to client

//* CLIENT/BROWSER
//* --> send token in headers

//* HEADERS
//* Authorization with <token>

//* SERVER
//* --> verify token
//* --> allow protected route

const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./routes/authRoutes');

const connectDB = require('./config/db');
connectDB(); // DB connection

app.use(cors());
app.use(express.json());

//* Routes 🛣️
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API running');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
