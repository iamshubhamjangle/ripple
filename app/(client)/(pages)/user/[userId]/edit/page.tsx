import React from "react";

import prisma from "@/app/_lib/db";
import { serverAuth } from "@/app/_lib/serverAuth";
import Profile from "@/app/(client)/(pages)/user/[userId]/edit/profile";

const ProfilePage = async () => {
  const session = await serverAuth();

  const userProfile = await prisma.userProfile.findFirst({
    where: {
      userId: session?.user.id,
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  return <Profile initialData={userProfile} />;
};

export default ProfilePage;
