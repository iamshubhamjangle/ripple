"use client";

import { Share2Icon } from "lucide-react";
import toast from "react-hot-toast";

interface FeedItemShareProps {
  postId: string;
}

const FeedItemShare: React.FC<FeedItemShareProps> = ({ postId }) => {
  const sharePost = (id: string) => {
    const link = `${window.location.host}/post/${id}`;
    navigator.clipboard.writeText(link);
    toast.success(`Link Copied. Now you share it with your friends.`);
  };

  return (
    <div
      onClick={() => sharePost(postId)}
      className="flex items-center cursor-pointer"
    >
      <Share2Icon className="mr-1 h-4 w-4" />
    </div>
  );
};

export default FeedItemShare;
