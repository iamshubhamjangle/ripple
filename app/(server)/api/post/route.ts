import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import prisma from "@/app/_lib/db";
import { getServerSessionWithoutUser } from "@/app/_lib/serverAuth";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSessionWithoutUser();
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    const body = await req.json();
    const { postBody } = body;

    if (!postBody) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    await prisma.post.create({
      data: {
        body: postBody,
        userId: session.user.id,
      },
    });

    revalidatePath("/");
    return new NextResponse("Success");
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
