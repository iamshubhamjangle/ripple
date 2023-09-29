import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(client)/_components/ui/avatar";
import { getInitials } from "@/app/_lib/utils";
import FeedItem from "../Feed/feed-item";
import { Button } from "../../ui/button";
import Link from "next/link";

interface UserProfileProps {
  user: any;
}

const UserProfile: React.FC<UserProfileProps> = async ({ user }) => {
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
          <p className="text-base font-normal">{user?.userProfile?.bio}</p>
        </div>
        <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">{user?._count.posts}</h3>
            <p className="text-sm font-normal">Posts</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">9.7K</h3>
            <p className="text-sm font-normal">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">434</h3>
            <p className="text-sm font-normal">Following</p>
          </div>
        </div>
        <div className="mt-6 mb-3 flex flex-wrap gap-10">
          <Button size={"lg"}>Follow</Button>
          <Link href={`/user/${user?.id}/edit`}>
            <Button size={"lg"} variant={"outline"}>
              Edit Profile
            </Button>
          </Link>
        </div>
        <div className="mx-8">
          <h2 className="text-xl font-bold tracking-tight pt-4">Your Post</h2>
          <div className="h-full space-y-4 my-4">
            {user?.posts &&
              user.posts.map((post: any) => {
                return (
                  <FeedItem
                    key={post.id}
                    id={post.id}
                    authorId={post.user.id}
                    authorProfilePicture={post.user.image}
                    uniqueName={post.user.identifier}
                    name={post.user.name || ""}
                    body={post.body}
                    timestamp={post.createdAt}
                    commentsCount={post._count.comments}
                    likes={post.likes}
                    shares={post.shares}
                  />
                );
              })}
          </div>
          {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
