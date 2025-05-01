const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
require('../models/post');

const PORT = process.env.PORT || 8080;

const configDatabase = async (app) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = { configDatabase };
