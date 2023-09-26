import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/_lib/db";
import { serverAuth } from "@/app/_lib/serverAuth";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function POST(
  req: NextRequest,
  { params }: { params: { postId: string; commentId: string } }
) {
  try {
    const session = await serverAuth();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    if (!params.commentId) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const userId = session.user.id;
    const commentId = params.commentId;

    // Check if a like already exists for the given userId and postId
    const existingLike = await prisma.commentLike.findFirst({
      where: {
        commentId,
        userId,
      },
    });

    if (existingLike) {
      await prisma.commentLike.delete({
        where: {
          id: existingLike.id,
          userId,
        },
      });
      return new NextResponse("Successfully Unliked");
    } else {
      await prisma.commentLike.create({
        data: {
          commentId,
          userId,
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
