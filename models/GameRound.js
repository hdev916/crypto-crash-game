const mongoose = require('mongoose');

const gameRoundSchema = new mongoose.Schema({
  roundNumber: Number,
  crashPoint: Number,
  seed: String,
  startTime: Date,
  bets: [
    {
      playerId: String,
      usdAmount: Number,
      cryptoAmount: Number,
      currency: String,
      cashoutMultiplier: Number,
      result: String,
    }
  ],
});

module.exports = mongoose.model('GameRound', gameRoundSchema);