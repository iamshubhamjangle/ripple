import PostItemCommentActionComment from "@/app/(client)/_components/MainContent/Post/post-item-comment-action-comment";
import PostItemCommentActionsLike from "@/app/(client)/_components/MainContent/Post/post-item-comment-action-like";
import { Like } from "@prisma/client";

interface PostItemCommentActionsProps {
  postId: string;
  commentId: string;
  likes: Like[];
  identifier: string;
}

const PostItemCommentActions: React.FC<PostItemCommentActionsProps> = ({
  postId,
  commentId,
  likes,
  identifier,
}) => {
  return (
    <div className="mt-3 flex gap-8">
      <PostItemCommentActionsLike
        postId={postId}
        commentId={commentId}
        likes={likes}
      />
      <PostItemCommentActionComment postId={postId} identifier={identifier} />
    </div>
  );
};

export default PostItemCommentActions;
