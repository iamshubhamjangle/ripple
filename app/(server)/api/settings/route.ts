import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import prisma from "@/app/_lib/db";
import { getUserFromServerSession } from "@/app/_lib/serverAuth";

export async function POST(req: NextRequest) {
  try {
    const user = await getUserFromServerSession();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const body = await req.json();
    const { bio, gender, birthDate, privateProfile, emailMarketing } = body;

    // Check if a UserProfile exists for the user's email
    const existingUserProfile = await prisma.userProfile.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (existingUserProfile) {
      await prisma.userProfile.update({
        where: {
          userId: user.id,
        },
        data: {
          bio,
          gender,
          birthDate,
          privateProfile,
          emailMarketing,
        },
      });
    } else {
      await prisma.userProfile.create({
        data: {
          bio,
          gender,
          birthDate,
          privateProfile,
          emailMarketing,
          userId: user.id,
        },
      });
    }

    revalidatePath("/settings");
    return new NextResponse("Success");
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
