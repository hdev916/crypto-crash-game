const crypto = require('crypto');

function generateCrashPoint(seed, round) {
  const hash = crypto.createHash('sha256').update(seed + round).digest('hex');
  const num = parseInt(hash.slice(0, 8), 16);
  return Math.max(1.0, Math.floor((num % 10000) / 100 + 10) / 10);
}

module.exports = { generateCrashPoint };