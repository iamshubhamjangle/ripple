import React from "react";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/_lib/auth";
import prisma from "@/app/_lib/db";
import Settings from "./settings";

const SettingsPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return null;

  const data = await prisma.userProfile.findUnique({
    where: {
      email: session.user?.email || "",
    },
  });

  return <Settings data={data} session={session} />;
};

export default SettingsPage;
