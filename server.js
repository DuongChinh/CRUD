const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => console.error("MongoDB connection error:", err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', api);

// Tĩnh
app.use(express.static('public'));

// Lắng nghe server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
