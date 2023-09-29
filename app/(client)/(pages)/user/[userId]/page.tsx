import UserProfile from "../../../_components/MainContent/UserProfile/user-profile";
import prisma from "@/app/_lib/db";

const Page = async ({ params }: { params: { userId: string } }) => {
  if (!params.userId) {
    return <>User doesn&apos;t exist</>;
  }

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
        },
      },
    },
  });

  return <UserProfile user={user} />;
};

export default Page;
