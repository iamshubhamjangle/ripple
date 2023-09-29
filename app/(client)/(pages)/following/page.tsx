import { serverAuth } from "@/app/_lib/serverAuth";
import prisma from "@/app/_lib/db";
import UserListWithAction from "../../_components/MainContent/User/user-list-with-action";
import { User } from "@prisma/client";
import UserListItem from "../../_components/MainContent/User/user-list-item";

const Page = async () => {
  const session = await serverAuth();
  const userId = session?.user.id;

  if (!userId) return <>Please login to view this page.</>;

  const users = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      following: {
        select: {
          following: {
            select: {
              id: true,
              name: true,
              identifier: true,
              image: true,
            },
          },
        },
      },
    },
  });

  return (
    <div className="container py-6 px-2 md:px-4">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Following</h2>
      </div>
      <div className="w-full my-6">
        {users?.following.map((follow) => {
          const { id, name, identifier, image } = follow.following;
          return (
            <UserListItem
              key={id}
              id={id}
              name={name || ""}
              identifier={identifier}
              image={image || ""}
              showFollowButton={false}
            />
          );
        })}
        {/* <pre>{JSON.stringify(users?.following, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default Page;
