import prisma from "@/app/_lib/db";
import FeedItem from "@/app/(client)/_components/MainContent/Feed/feed-item";

const Feed = async () => {
  const posts = await prisma.post.findMany({
    include: {
      likes: true,
      user: { select: { id: true, name: true, image: true, identifier: true } },
    },
  });

  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight py-4">Your Feed</h2>
      <div className="h-full space-y-4 my-4">
        {posts &&
          posts.map((post) => {
            return (
              <FeedItem
                key={post.id}
                id={post.id}
                authorId={post.user.id}
                uniqueName={post.user.identifier}
                name={post.user.name || ""}
                body={post.body}
                timestamp={post.createdAt}
                comments={0}
                likes={post.likes}
                shares={post.shares}
              />
            );
          })}
      </div>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
    </div>
  );
};

export default Feed;
