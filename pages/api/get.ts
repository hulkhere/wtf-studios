import prisma from "../../utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const feedback = await prisma.waitlist.findMany({
    select: {
      email: true,
      createdAt: true,
    },
  });
  res.status(200).json(feedback);
};
