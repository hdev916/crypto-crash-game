# 💥 Crypto Crash Game 🎮

A real-time multiplayer crash game simulation inspired by crypto betting games like Bustabit. Built using **Node.js**, **Express**, **Socket.IO**, and **MongoDB**.

---

## 🚀 Features

- 🔥 Live crash multiplier that increases and crashes at a random fair point
- 👤 User creation with wallet balances in BTC and ETH
- 💸 Real-time cashout mechanism before crash
- 📈 Real crypto price fetch and USD conversion
- 🌐 WebSocket-based multiplayer game rounds
- 🧪 Provably fair crash logic (server-deterministic)

---

## 🧩 Tech Stack

- Backend: `Node.js`, `Express.js`, `MongoDB`, `Mongoose`
- Real-Time: `Socket.IO`
- Frontend: Simple `HTML + JS`
- Pricing API: Mock or real crypto price fetch (extensible)

---

## 📂 Project Structure

.
├── config/
│ └── db.js # MongoDB connection
├── models/
│ ├── GameRound.js # Stores crash round data
│ └── Player.js # Player model with wallet
├── routes/
│ ├── gameRoutes.js # Game round related APIs
│ └── walletRoutes.js # Wallet creation and balance APIs
├── sockets/
│ └── crashSocket.js # Handles game loop and sockets
├── utils/
│ ├── cryptoPrice.js # Fetch crypto prices
│ └── provablyFair.js # Generates crash points fairly
├── public/
│ └── test.html # Simple frontend UI for testing
├── index.js # Entry point of the server
└── README.md

---

## 🛠 Setup Instructions

### 1. Clone and Install Dependencies
git clone https://github.com/hdev916/crypto-crash-game.git
cd crypto-crash-game
npm install
2. Start MongoDB
Make sure MongoDB is running locally on mongodb://localhost:27017/crashGame.

3. Start the Server
bash
Copy code
node scrips.js
You should see:

nginx
Copy code
Server started on port 5000