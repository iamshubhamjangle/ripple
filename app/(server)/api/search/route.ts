import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/_lib/db";

export async function GET(req: NextRequest) {
  try {
    const searchText = req.nextUrl.searchParams.get("q");
    if (!searchText) return new NextResponse();

    const users = await prisma.user.findMany({
      where: {
        name: {
          search: searchText,
        },
        identifier: {
          search: searchText,
        },
      },
      select: {
        id: true,
        identifier: true,
        name: true,
        image: true,
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
