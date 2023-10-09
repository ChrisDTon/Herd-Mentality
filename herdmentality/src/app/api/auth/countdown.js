/*import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { sec } = req.body;

        const countdown = await prisma.countdown.upsert({
            where: { id: 1 },
            update: { sec },
            create: { id: 1, sec },
        });

        res.status(200).json(countdown);
    }
}*/

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post('/api/countdown', async (req, res) => {
  const { sec } = req.body;

  const countdown = await prisma.countdown.upsert({
    where: { id: 1 },
    update: { sec },
    create: { id: 1, sec },
  });

  res.json(countdown);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


module.exports = handler;