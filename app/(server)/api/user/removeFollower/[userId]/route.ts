import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/_lib/db";
import { serverAuth } from "@/app/_lib/serverAuth";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function POST(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await serverAuth();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    if (!params.userId) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const userId = session.user.id;
    const followerId = params.userId;

    if (userId === followerId)
      return new NextResponse("You cannot remove yourself", { status: 400 });

    await prisma.follows.delete({
      where: {
        followerId_followingId: {
          followerId,
          followingId: userId,
        },
      },
    });

    return new NextResponse("Success");
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      console.error(error);
      return new NextResponse("Unauthorized", { status: 401 });
    }
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
