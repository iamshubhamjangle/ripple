import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/app/_lib/db";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = await getToken({ req: request });

    if (!token) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { bio, gender, birthDate, privateProfile, emailMarketing } = body;
    const { email } = token;

    if (!email) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    // Check if a UserProfile exists for the user's email
    const existingUserProfile = await prisma.userProfile.findUnique({
      where: {
        email,
      },
    });

    if (existingUserProfile) {
      await prisma.userProfile.update({
        where: {
          email,
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
          email,
          bio,
          gender,
          birthDate,
          privateProfile,
          emailMarketing,
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
