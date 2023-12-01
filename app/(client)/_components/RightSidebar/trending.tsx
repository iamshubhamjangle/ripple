import prisma from "@/app/_lib/db";
import { Separator } from "@/app/(client)/_components/ui/separator";
import { FlameIcon } from "lucide-react";
import Link from "next/link";

const Trending = async () => {
  // const twentyFourHoursAgo = Date.now() - 7 * 24 * 60 * 60 * 1000; // 24 x 7 hours ago

  const topLikedPosts = await prisma.post.findMany({
    // where: {
    //   createdAt: {
    //     gte: new Date(twentyFourHoursAgo), // Posts created in the last 24 hours
    //   },
    // },
    select: {
      id: true,
      body: true,
      _count: {
        select: {
          likes: true,
        },
      },
    },
    orderBy: {
      // Order by the number of likes in descending order
      likes: {
        _count: "desc",
      },
    },
    take: 5, // Limit the result to the top 10 posts
  });

  return (
    <div className="h-[60vh] bg-secondary rounded-md p-4 overflow-y-auto scrollbar-none">
      <h2 className="text-xl font-bold pb-2">Trending</h2>
      <div className="h-fit">
        {topLikedPosts.map((post) => {
          return (
            <Link key={post.id} href={`/post/${post.id}`} prefetch={false}>
              <div key={post.id}>
                <div className="flex">
                  <FlameIcon className="h-4 w-4 mr-2 text-slate-500" />
                  <span className="text-sm text-muted-foreground">
                    {post._count.likes}
                  </span>
                </div>
                <p className="line-clamp-2">{post.body}</p>
                <Separator className="my-4 dark:bg-slate-700" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
