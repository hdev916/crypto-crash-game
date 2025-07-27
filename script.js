const express = require('express');
const app = express();
const http = require('http').createServer(app);
const initSocket = require('./sockets/crashSocket');
const connectDB = require('./config/db');
const cors = require('cors');
app.use(cors());

connectDB();
app.use(express.json());
app.get('/', (req, res) => {
  res.redirect('https://688673cfcc6fb2e7ac1cc5a3--crypto-crash12.netlify.app/'); // replace with actual link
});


const gameRoutes = require('./routes/gameRoutes');
const walletRoutes = require('./routes/walletRoutes');

app.use('/api/game', gameRoutes);
app.use('/api/wallet', walletRoutes);

initSocket(http);

http.listen(5000, () => console.log('Server started on port 5000'));
