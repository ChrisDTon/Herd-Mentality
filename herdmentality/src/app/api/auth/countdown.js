import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { seconds } = req.body;

  const countdown = await prisma.countdown.upsert({
    where: { id: 1 },
    update: { seconds },
    create: { id: 1, seconds },
  });

  res.json(countdown);
}
