import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // To get the user count so that we can update them all
    const users = await prisma.user.findMany();
    let userCount = users.length;

    // Updating the scores of all the users
    for(let i = 0; i < userCount; i++){
        let id = i+1;// +1 due to the userId starting at 1 and not 0
        
        // Gets the current user
        const user = await prisma.user.findUnique({
            where: {
                idUser: id,
            },
            select: {
                score: true,
                Round: true,
            }
        })

        // Increases the points of the users if they answered correctly during this round
        
        let newScore = user?.score;
        if(newScore == undefined){
            newScore = 0;
        }
        newScore = newScore+1
        
        const updateUser = await prisma.user.update({
            where: {
                idUser: id,
            },
            data: {
                score: newScore,
            },
        })
        
    console.log(updateUser)        
    }
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