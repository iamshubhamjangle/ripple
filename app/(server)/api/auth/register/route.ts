import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/_lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, identifier, password } = body;

    if (!name || !email || !password || !identifier) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const exist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (exist) {
      return new NextResponse("Email already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const noSpaceIdentifier = identifier.split(" ")[0];

    await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        identifier: noSpaceIdentifier,
      },
    });

    return new NextResponse("Success");
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
