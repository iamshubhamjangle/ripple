import Link from "next/link";
import { Session } from "next-auth";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(client)/_components/ui/avatar";

import { Follows } from "@prisma/client";
import { getInitials } from "@/app/_lib/utils";
import { Button } from "@/app/(client)/_components/ui/button";
import FeedItem from "@/app/(client)/_components/MainContent/Feed/feed-item";
import FollowUnfollow from "@/app/(client)/_components/MainContent/User/action-follow-unfollow";

interface UserProfileProps {
  user: any;
  session: Session | null;
}

const UserProfile: React.FC<UserProfileProps> = async ({ user, session }) => {
  const userId = session?.user.id;
  const showUnFollowButton = user?.followers.find(
    (item: Follows) => item.followerId === session?.user.id
  );

  return (
    <div className="container py-6 px-2 md:px-4">
      <div className="relative flex flex-col items-center">
        <div
          className="relative mt-1 flex h-32 w-full justify-center rounded-xl"
          style={{
            background:
              "linear-gradient(156deg, rgba(254, 215, 146, 1) 0%, rgba(254, 156, 124, 1) 31%, rgba(201, 93, 157, 1) 66%, rgba(171, 42, 217, 1) 100%)",
          }}
        >
          <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
            <Avatar className="h-full w-full">
              <AvatarImage src={user?.image || ""} alt="user avatar" />
              <AvatarFallback>{getInitials(user?.name || "")}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold">{user?.name}</h4>
          <p className="text-sm text-center">{user?.userProfile?.bio}</p>
        </div>
        <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">{user?._count.posts}</h3>
            <p className="text-sm font-normal">Posts</p>
          </div>
          <Link href={"/following"}>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold">{user._count.following}</h3>
              <p className="text-sm font-normal">Following</p>
            </div>
          </Link>
          <Link href={"/followers"}>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold">{user._count.followers}</h3>
              <p className="text-sm font-normal">Followers</p>
            </div>
          </Link>
        </div>
        <div className="mt-6 mb-3 flex flex-wrap gap-2 md:gap-10">
          {userId && userId !== user?.id && (
            <FollowUnfollow
              userId={user?.id}
              showFollowButton={!showUnFollowButton}
            />
          )}

          {userId && userId === user?.id && (
            <Link href={`/user/edit`} className="w-full md:w-fit">
              <Button
                size={"lg"}
                variant={"outline"}
                className="w-full md:w-fit"
              >
                Edit Profile
              </Button>
            </Link>
          )}
        </div>
        <div className="w-full h-full">
          <h2 className="text-xl font-bold tracking-tight pt-4">
            Your Post&apos;s
          </h2>
          <div className="space-y-4 my-4">
            {user?.posts &&
              user.posts.map((post: any) => {
                return (
                  <FeedItem
                    key={post.id}
                    id={post.id}
                    authorId={post.user.id}
                    authorProfilePicture={post.user.image}
                    uniqueName={post.user.identifier}
                    name={post.user.name}
                    body={post.body}
                    timestamp={post.createdAt}
                    commentsCount={post._count.comments}
                    likes={post.likes}
                    shares={post.shares}
                  />
                );
              })}
          </div>
          {/* <div className="max-w-3xl overflow-x-auto">
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
