const { Server } = require('socket.io');
const { generateCrashPoint } = require('../utils/provablyFair');
const GameRound = require('../models/GameRound');
let multiplier = 1;
let interval;

module.exports = (server) => {
  const io = new Server(server, { cors: { origin: '*' } });

  let currentRound = 0;
  let seed = 'secretseed';

  setInterval(() => {
    currentRound++;
    const crashPoint = generateCrashPoint(seed, currentRound) || 2.5;
    multiplier = 1;
    io.emit('roundStart', { round: currentRound });
    interval = setInterval(() => {
      multiplier += 0.01;
      io.emit('multiplierUpdate', { multiplier: multiplier.toFixed(2) });


      if (multiplier >= crashPoint) {
        io.emit('roundCrash', { crashPoint });
        clearInterval(interval);
      }
    }, 100);
  }, 10000);

  io.on('connection', (socket) => {
    socket.on('cashout', (data) => {
      // Handle cashout logic per player and emit event
    });
  });
};
