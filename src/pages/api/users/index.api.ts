// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, username } = req.body

  const doesUserExist = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (doesUserExist) {
    return res.status(400).json({ message: 'User alreary exist' })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })
  return res.status(200).json(user)
}
