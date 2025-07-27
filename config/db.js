const mongoose = require('mongoose');
module.exports = () => {
  mongoose.connect('mongodb+srv://Harsh:Rambo125636@cluster0.ljpmvgm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
};