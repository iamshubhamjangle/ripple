"use client";

import axios from "axios";
import { HeartIcon, Info } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { experimental_useOptimistic as useOptimistic } from "react";
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
  const userId = session?.user.id;

  const router = useRouter();
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes);

  const isPostLikedByUser =
    optimisticLikes.findIndex((like) => like.userId === userId) !== -1;

  const likePost = (postId: string) => {
    if (!session) {
      return toast("Please login to continue.", {
        icon: <Info color="orange" />,
      });
    }

    if (isPostLikedByUser) {
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

    axios
      .post(`/api/post/${postId}/action/like`)
      .then(() => {})
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => router.refresh());
  };

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
      <span>{optimisticLikes.length}</span>
    </div>
  );
};

export default FeedItemLikeDislike;
