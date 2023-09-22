import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/_lib/db";

function generateRandomString(length: number) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

/**
 * Converts input string to Lowercase english alphabets without spaces trimmed down to 20 chars
 * @param inputString string
 * @returns string
 */
async function generateIdentifier(inputString: string) {
  const generatedUniqueIdentifier = inputString
    .toLowerCase()
    .replace(/[^a-z_]/g, "")
    .substring(0, 20);

  // Check if exist in db
  const user = await prisma.user.findFirst({
    where: {
      identifier: generatedUniqueIdentifier,
    },
    select: {
      email: true,
    },
  });

  if (user) {
    const newIdentifier =
      generatedUniqueIdentifier + "_" + generateRandomString(5);
    return generateIdentifier(newIdentifier);
  }
  return generatedUniqueIdentifier;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
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
    const identifier = await generateIdentifier(name);

    await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        identifier,
        userProfile: {
          create: {
            privateProfile: true,
            emailMarketing: false,
          },
        },
      },
    });

    return new NextResponse("Success");
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
