import PostItemCommentActionComment from "@/app/(client)/_components/MainContent/Post/post-item-comment-action-comment";
import PostItemCommentActionsLike from "@/app/(client)/_components/MainContent/Post/post-item-comment-action-like";
import { Like } from "@prisma/client";

interface PostItemCommentActionsProps {
  postId: string;
  commentId: string;
  likes: Like[];
}

const PostItemCommentActions: React.FC<PostItemCommentActionsProps> = ({
  postId,
  commentId,
  likes,
}) => {
  return (
    <div className="mt-3 flex gap-8">
      <PostItemCommentActionsLike
        postId={postId}
        commentId={commentId}
        likes={likes}
      />
      <PostItemCommentActionComment />
    </div>
  );
};

export default PostItemCommentActions;
