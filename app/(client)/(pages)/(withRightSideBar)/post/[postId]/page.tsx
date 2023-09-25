import prisma from "@/app/_lib/db";
import PostItem from "../../../../_components/MainContent/Post/post-item";
import Link from "next/link";

const Page = async ({ params }: { params: { postId: string } }) => {
  const post = await prisma.post.findFirst({
    where: {
      id: params.postId,
    },
    include: {
      likes: true,
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

  return (
    <div className="my-6">
      <PostItem post={post} />
    </div>
  );
};

export default Page;
