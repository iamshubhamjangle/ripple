"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { HeartIcon } from "lucide-react";
import { Like } from "@prisma/client";
import { experimental_useOptimistic as useOptimistic } from "react";

interface PostItemCommentActionLikeProps {
  postId: string;
  commentId: string;
  likes: Like[];
}

const PostItemCommentActionsLike: React.FC<PostItemCommentActionLikeProps> = ({
  postId,
  commentId,
  likes,
}) => {
  const { data: session } = useSession();
  const userId = session?.user.id;

  const router = useRouter();
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes);

  const isPostCommentLikedByUser =
    optimisticLikes.findIndex((like) => like.userId === userId) !== -1;

  const handleCommentLike = async () => {
    if (isPostCommentLikedByUser) {
      setOptimisticLikes((prevState) => {
        const idx = prevState.findIndex((like) => like.userId === userId);
        prevState.splice(idx, 1);
        return [...prevState];
      });
    } else {
      setOptimisticLikes((prevState) => [
        ...prevState,
        { id: "optimistic_like_1", postId, userId },
      ]);
    }

    await axios
      .post(
        `/api/post/${postId}/action/comment/${commentId}/action/likeOrUnlike`
      )
      .then(() => {})
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => router.refresh());
  };

  return (
    <div
      onClick={handleCommentLike}
      className="flex items-center text-sm text-muted-foreground cursor-pointer"
    >
      {isPostCommentLikedByUser ? (
        <HeartIcon fill="red" color="red" className="mr-1 h-4 w-4" />
      ) : (
        <HeartIcon className="mr-1 h-4 w-4" />
      )}
      <span>{optimisticLikes.length || 0}</span>
    </div>
  );
};

export default PostItemCommentActionsLike;
