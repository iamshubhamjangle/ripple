import prisma from "@/app/_lib/db";
import FeedItem from "@/app/(client)/_components/MainContent/Feed/feed-item";
import { ZapIcon } from "lucide-react";

const Page = async () => {
  const twentyFourHoursAgo = Date.now() - 7 * 24 * 60 * 60 * 1000; // 24 x 7 hours ago

  const topLikedPosts = await prisma.post.findMany({
    where: {
      createdAt: {
        gte: new Date(twentyFourHoursAgo), // Posts created in the last 24 hours
      },
    },
    select: {
      id: true,
      body: true,
      createdAt: true,
      likes: true,
      shares: true,
      user: {
        select: {
          id: true,
          image: true,
          name: true,
          identifier: true,
        },
      },
      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },
    orderBy: {
      // Order by the number of likes in descending order
      likes: {
        _count: "desc",
      },
    },
    take: 10, // Limit the result to the top 10 posts
  });

  return (
    <div className="container py-6 px-2 md:px-4">
      <div className="flex items-center">
        <ZapIcon className="h-7 w-7 mr-2 text-blue-300 fill-blue-300 animate-[rotate_3s_infinite]" />
        <h2 className="text-3xl font-bold tracking-tight">
          Trending <span className="ml-2 text-xl">TOP 10</span>
        </h2>
      </div>
      <div className="grid w-full items-center gap-5 my-4">
        <div className="h-full space-y-4 my-4">
          {topLikedPosts &&
            topLikedPosts.map((post) => {
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
      </div>
    </div>
  );
};

export default Page;
