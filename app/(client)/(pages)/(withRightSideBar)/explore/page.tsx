import prisma from "@/app/_lib/db";
import { serverAuth } from "@/app/_lib/serverAuth";
import UserListWithAction from "@/app/(client)/_components/MainContent/User/user-list-with-action";

const Page = async () => {
  const session = await serverAuth();
  const userId = session?.user.id;

  const nonFollowedUsers = await prisma.$queryRaw`
    SELECT * FROM "User"
    WHERE "User"."id" NOT IN (
      SELECT "followingId" FROM "Follows" WHERE "followerId" = ${userId} -- Exclude user not followed by current user
    )
    AND "User"."id" != ${userId} -- Exclude the loggedInUserId
    LIMIT 30
  `;

  return (
    <div className="container py-6 px-2 md:px-4">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Explore</h2>
      </div>
      <div className="w-full my-6">
        <UserListWithAction users={nonFollowedUsers} showFollowButton={true} />
      </div>
    </div>
  );
};

export default Page;
