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
    const followTo = params.userId;

    if (userId === followTo)
      return new NextResponse("You cannot follow yourself", { status: 400 });

    const existingFollow = await prisma.follows.findUnique({
      where: {
        followerId_followingId: {
          followerId: userId,
          followingId: followTo,
        },
      },
    });

    if (existingFollow) {
      // If already following, then unfollow
      await prisma.follows.delete({
        where: {
          followerId_followingId: {
            followerId: userId,
            followingId: followTo,
          },
        },
      });
      //   console.log(`User ${userId} has unfollowed user ${followTo}.`);
    } else {
      // If not following, then follow
      await prisma.follows.create({
        data: {
          followerId: userId,
          followingId: followTo,
        },
      });
      //   console.log(`User ${userId} is now following user ${followTo}.`);
    }

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
