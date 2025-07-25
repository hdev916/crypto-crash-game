const express = require('express');
const router = express.Router();
const Player = require('../models/Player');
const GameRound = require('../models/GameRound');
const Transaction = require('../models/Transaction');
const { fetchPrices } = require('../utils/cryptoPrice');
const { v4: uuidv4 } = require('uuid');


router.get('/users', async (req, res) => {
  const users = await User.find(); 
  res.json(users);
});

router.post('/bet', async (req, res) => {
  const { playerId, usdAmount, currency } = req.body;
  const prices = await fetchPrices();
  const cryptoAmount = usdAmount / prices[currency];
  const player = await Player.findById(playerId);
  if (!player || player.wallet[currency] < cryptoAmount) return res.status(400).send('Insufficient balance');

  player.wallet[currency] -= cryptoAmount;
  await player.save();

  await Transaction.create({
    playerId,
    usdAmount,
    cryptoAmount,
    currency,
    transactionType: 'bet',
    transactionHash: uuidv4(),
    priceAtTime: prices[currency],
  });

  res.json({ cryptoAmount });
});

router.post('/cashout', async (req, res) => {
  // Cashout logic similar, to be integrated with WebSocket-controlled round
});

module.exports = router;