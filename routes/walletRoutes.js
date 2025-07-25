const express = require('express');
const router = express.Router();
const Player = require('../models/Player');
const { fetchPrices } = require('../utils/cryptoPrice');

router.post('/create', async (req, res) => {
  const { username, wallet } = req.body;

  if (!username || !wallet) {
    return res.status(400).json({ message: 'username and wallet required' });
  }

  try {
    const newPlayer = new Player({ username, wallet });
    await newPlayer.save();

    console.log('Player created:', newPlayer);
    res.status(201).json({ message: 'Wallet created', player: newPlayer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});




router.get('/balance/:playerId', async (req, res) => {
  const player = await Player.findById(req.params.playerId);
  if (!player) return res.status(404).send('Not found');

  const prices = await fetchPrices();
  const usdEquiv = {
    BTC: player.wallet.BTC * prices.BTC,
    ETH: player.wallet.ETH * prices.ETH,
  };

  res.json({ wallet: player.wallet, usdEquivalent: usdEquiv });
});

module.exports = router;