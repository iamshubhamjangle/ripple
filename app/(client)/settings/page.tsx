import React from "react";

import prisma from "@/app/_lib/db";
import Settings from "@/app/(client)/settings/settings";
import { getServerSessionWithoutUser } from "@/app/_lib/serverAuth";

const SettingsPage = async () => {
  const session = await getServerSessionWithoutUser();

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

  return <Settings initialData={userProfile} />;
};

export default SettingsPage;
