import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { revalidatePath } from "next/cache";

import prisma from "@/app/_lib/db";

export async function POST(request: NextRequest) {
  try {
    // const body = await request.json();
    // const token = await getToken({ req: request });

    // if (!token) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    // const { body: postBody } = body;
    // const { email } = token;

    // if (!email) {
    //   return new NextResponse("Missing Fields", { status: 400 });
    // }

    // if (!postBody) {
    //     return new NextResponse("Missing Fields", { status: 400 });
    //   }

    // await prisma.post.create({
    //     data: {
    //         body: postBody,
    //         user:
    //     }
    // })

    // revalidatePath("/settings");
    return new NextResponse("Success");
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
