import { getServerSession } from "next-auth";

import prisma from "@/app/_lib/db";
import { authOptions } from "@/app/_lib/auth";

export const getUserFromServerSession = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return null;

  const email = session.user?.email;
  if (!email) return null;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) return null;
  return user;
};
