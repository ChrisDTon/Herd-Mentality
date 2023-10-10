import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

interface Countdown {
  id: number;
  seconds: number;
}

export const postHandler = async (req: { body: { seconds: number } }, res: NextApiResponse) => {
  console.log('Received POST request to /api/countdown');

  const { seconds } = req.body;

  const countdown: Countdown = await prisma.countdown.upsert({
    where: { id: 1 },
    update: { seconds },
    create: { id: 1, seconds },
  });

  res.json(countdown);
};

export const getHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  console.log('Received GET request to /api/countdown');

  const countdown: Countdown | null = await prisma.countdown.findUnique({
    where: { id: 1 },
  });

  res.json(countdown || {});
};
