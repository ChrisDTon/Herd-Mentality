const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  setInterval(() => {
    console.log('Sending current countdown time to all clients')
    ws.send(countdownTime.toString());
  }, 1000);  

  ws.on('message', (data) => {
    console.log('Updating the current countdown timer based on data sent from client')
    countdownTime = data;
    var clientnumber = 0;
    wss.clients.forEach((client) => {
      console.log('Attempting to send updated countdown timer to all clients')
      if (client.readyState === WebSocket.OPEN) {
        console.log('Sending current countdown time to all clients')
        client.send(countdownTime.toString());
      }
    });
  });
});

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/api/countdown', async (req, res) => {
  const countdown = await prisma.countdown.findUnique({
    where: { id: 1 },
  });

  res.json(countdown);
});

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
