const mongoose = require('mongoose');
module.exports = () => {
  mongoose.connect('mongodb://localhost:27017/').then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
};