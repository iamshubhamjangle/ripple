import prisma from "@/app/_lib/db";
import { serverAuth } from "@/app/_lib/serverAuth";
import UserListItem from "@/app/(client)/_components/MainContent/User/user-list-item";
import RemoveUserButton from "@/app/(client)/_components/MainContent/User/action-remove-user";

const Page = async () => {
  const session = await serverAuth();
  const userId = session?.user.id;

  if (!userId) return <>Please login to view this page.</>;

  const users = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      followers: {
        select: {
          follower: {
            select: {
              id: true,
              image: true,
              name: true,
              identifier: true,
            },
          },
        },
      },
    },
  });

  return (
    <div className="container py-6 px-2 md:px-4">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Followers</h2>
      </div>
      <div className="w-full my-6">
        {users?.followers.map((item) => {
          const user = item.follower;
          return (
            <UserListItem
              key={user.id}
              identifier={user.identifier}
              image={user.image}
              name={user.name}
              actions={<RemoveUserButton userId={user.id} />}
            />
          );
        })}
      </div>
      {/* <pre>{JSON.stringify(users?.followers, null, 2)}</pre> */}
    </div>
  );
};

export default Page;
