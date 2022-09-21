import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({log: ["query"]})

async function main() {
  await prisma.user.deleteMany()

  const user = await prisma.user.create({data: {
    name: "Luis",
    cpf: "111.222.333.-00",
  },
  select: {
    name: true,
  },
  })
}

main()