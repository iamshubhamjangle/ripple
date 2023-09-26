"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { HeartIcon, Loader2 } from "lucide-react";
import { Like } from "@prisma/client";

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
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleCommentLike = () => {
    setLoading(true);
    axios
      .post(
        `/api/post/${postId}/action/comment/${commentId}/action/likeOrUnlike`
      )
      .then(() => router.refresh())
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => setLoading(false));
  };

  // Loading State
  if (loading) return <Loader2 className="mr-2 h-4 w-4 animate-spin" />;

  const isPostCommentLikedByUser =
    likes.findIndex((like) => like.userId === session?.user.id) !== -1;

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
      <span>{likes.length || 0}</span>
    </div>
  );
};

export default PostItemCommentActionsLike;
