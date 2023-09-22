import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/_lib/db";
import { getServerSessionWithoutUser } from "@/app/_lib/serverAuth";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function POST(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const session = await getServerSessionWithoutUser();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    if (!params.postId) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const userId = session.user.id;
    const postId = params.postId;

    // Check if a like already exists for the given userId and postId
    const existingLike = await prisma.like.findFirst({
      where: {
        userId,
        postId,
      },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
      return new NextResponse("Successfully Unliked");
    } else {
      await prisma.like.create({
        data: {
          userId,
          postId,
        },
      });
      return new NextResponse("Successfully Liked");
    }
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
