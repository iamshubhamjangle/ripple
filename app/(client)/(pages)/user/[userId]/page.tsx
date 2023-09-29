import { serverAuth } from "@/app/_lib/serverAuth";
import UserProfile from "../../../_components/MainContent/UserProfile/user-profile";
import prisma from "@/app/_lib/db";

const Page = async ({ params }: { params: { userId: string } }) => {
  if (!params.userId) {
    return <>User doesn&apos;t exist</>;
  }

  const session = await serverAuth();
  const user = await prisma.user.findFirst({
    where: {
      id: params.userId,
    },
    select: {
      id: true,
      image: true,
      name: true,
      identifier: true,
      userProfile: true,
      followers: true,
      posts: {
        include: {
          user: {
            select: {
              id: true,
              image: true,
              identifier: true,
              name: true,
            },
          },
          _count: {
            select: {
              comments: true,
            },
          },
          likes: true,
        },
      },
      _count: {
        select: {
          posts: true,
          following: true,
          followers: true,
        },
      },
    },
  });

  return <UserProfile user={user} session={session} />;
};

export default Page;
