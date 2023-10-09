const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
let countdownTime = 60;

wss.on('connection', (ws) => {
  console.log('Client connected');

  setInterval(() => {
    ws.send(countdownTime.toString());
  }, 1000);
});

wss.on('message', (data) => {
  countdownTime = data;
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(countdownTime);
    }
  });
});

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post('/api/countdown', async (req, res) => {
  const { seconds } = req.body;

  const countdown = await prisma.countdown.upsert({
    where: { id: 1 },
    update: { seconds },
    create: { id: 1, seconds },
  });

  res.json(countdown);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
