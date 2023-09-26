"use client";

import axios from "axios";
import { HeartIcon, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface FeedItemDeleteProps {
  postId: string;
  likes: {
    id: string;
    userId: string;
    postId: string;
  }[];
}

const FeedItemLikeDislike: React.FC<FeedItemDeleteProps> = ({
  postId,
  likes,
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const likePost = (postId: string) => {
    setLoading(true);
    axios
      .post(`/api/post/${postId}/action/like`)
      .then(() => router.refresh())
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => setLoading(false));
  };

  // Loading State
  if (loading) return <Loader2 className="mr-2 h-4 w-4 animate-spin" />;

  const isPostLikedByUser =
    likes.findIndex((like) => like.userId === session?.user.id) !== -1;

  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => likePost(postId)}
    >
      {isPostLikedByUser ? (
        <HeartIcon fill="red" color="red" className="mr-1 h-4 w-4" />
      ) : (
        <HeartIcon className="mr-1 h-4 w-4" />
      )}
      <span>{likes.length}</span>
    </div>
  );
};

export default FeedItemLikeDislike;
