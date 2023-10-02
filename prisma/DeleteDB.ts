import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Delete all rows in Round
    const deleteUsers = prisma.user.deleteMany()
    const deleteRounds = prisma.round.deleteMany()
    const deletePrompts = prisma.prompt.deleteMany()

    // The transaction runs synchronously so deleteUsers must run last.
    await prisma.$transaction([deletePrompts, deleteRounds, deleteUsers])
                
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })