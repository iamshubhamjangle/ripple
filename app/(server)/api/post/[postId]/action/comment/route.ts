import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/_lib/db";
import { serverAuth } from "@/app/_lib/serverAuth";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function POST(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const session = await serverAuth();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    if (!params.postId) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const body = await req.json();
    const { commentBody } = body;

    if (!commentBody) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const userId = session.user.id;
    const postId = params.postId;

    await prisma.comment.create({
      data: {
        body: commentBody,
        postId,
        userId,
      },
    });

    return new NextResponse("Successfully Commented");
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
