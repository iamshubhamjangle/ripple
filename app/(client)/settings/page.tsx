import React from "react";

import prisma from "@/app/_lib/db";
import Settings from "@/app/(client)/settings/settings";
import { getUserFromServerSession } from "@/app/_lib/serverAuth";

const SettingsPage = async () => {
  const user = await getUserFromServerSession();

  const data = await prisma.userProfile.findUnique({
    where: {
      id: user?.id,
    },
  });

  const userDataToPassedToClient = {
    name: user?.name,
    email: user?.email,
    emailVerified: user?.emailVerified,
    image: user?.image,
  };

  return <Settings data={data} userData={userDataToPassedToClient} />;
};

export default SettingsPage;
