const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api', router);

// Rutas y puerto
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
