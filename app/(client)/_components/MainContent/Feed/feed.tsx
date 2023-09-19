import prisma from "@/app/_lib/db";
import FeedItem from "@/app/(client)/_components/MainContent/Feed/feed-item";

const Feed = async () => {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight">Feed</h2>
      <div className="h-full space-y-4 my-4">
        {posts &&
          posts.map((post) => {
            return (
              <FeedItem
                key={post.id}
                uniqueName={post.userId}
                name={post.userId}
                body={post.body}
                timestamp={post.createdAt}
                comments={post.likes}
                likes={post.likes}
                shares={post.shares}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Feed;
