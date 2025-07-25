const axios = require('axios');

let cachedPrices = {};
let lastFetched = 0;

const fetchPrices = async () => {
  const now = Date.now();
  if (now - lastFetched < 10000 && cachedPrices.BTC) return cachedPrices;

  const res = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
  cachedPrices = {
    BTC: res.data.bitcoin.usd,
    ETH: res.data.ethereum.usd,
  };
  lastFetched = now;
  return cachedPrices;
};

module.exports = { fetchPrices };