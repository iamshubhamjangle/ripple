import prisma from "@/app/_lib/db";
import FeedItemAvatar from "../Feed/feed-item-avatar";
import PostItemCommentHeader from "./post-item-comment-header";
import PostItemCommentActions from "./post-item-comment-actions";
import { Separator } from "../../ui/separator";

interface PostItemCommentProps {
  postId: string;
}

const PostItemComments: React.FC<PostItemCommentProps> = async ({ postId }) => {
  const comments =
    postId &&
    (await prisma.comment.findMany({
      where: {
        postId,
      },
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
    }));

  if (!comments) return null;

  return (
    <div className="space-y-2">
      <h2>Comments</h2>
      {comments.map((comment) => {
        return (
          <>
            <div key={comment.id} className="flex flex-row gap-2 py-2">
              <FeedItemAvatar
                avatarName={comment.user.name || ""}
                imageSrc={comment.user.image}
              />
              <div>
                <PostItemCommentHeader
                  name={comment.user.name || ""}
                  uniqueName={comment.user.identifier}
                  timestamp={comment.createdAt}
                />
                <div className="text-base">{comment.body}</div>
                <PostItemCommentActions />
              </div>
            </div>
            <Separator />
          </>
        );
      })}
    </div>
  );
};

export default PostItemComments;
