import Link from "next/link";
import prisma from "@/app/_lib/db";
import PostItem from "@/app/(client)/_components/MainContent/Post/post-item";

const Page = async ({ params }: { params: { postId: string } }) => {
  const post = await prisma.post.findFirst({
    where: {
      id: params.postId,
    },
    include: {
      _count: {
        select: {
          comments: true,
        },
      },
      likes: true,
      comments: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              identifier: true,
              image: true,
            },
          },
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          identifier: true,
          image: true,
        },
      },
    },
  });

  if (post === null)
    return (
      <div className="my-6">
        This post doesn&apos;t exist.{" "}
        <Link href="/" className="text-blue-700 underline">
          Go back
        </Link>
      </div>
    );

  return <PostItem post={post} />;
};

export default Page;
