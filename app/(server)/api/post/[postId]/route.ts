import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/_lib/db";
import { getServerSessionWithoutUser } from "@/app/_lib/serverAuth";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const session = await getServerSessionWithoutUser();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    if (!params.postId) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    await prisma.post.delete({
      where: {
        id: params.postId,
        userId: session.user.id,
      },
    });

    return new NextResponse("Successfully Deleted");
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      console.error(error);
      return new NextResponse("Unauthorized", { status: 401 });
    }
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
