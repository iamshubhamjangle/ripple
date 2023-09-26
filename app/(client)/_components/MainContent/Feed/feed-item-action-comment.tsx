"use client";

import axios from "axios";
import { Loader2, MessageCircleIcon, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

interface FeedItemCommentProps {
  postId: string;
}

const FeedItemComment: React.FC<FeedItemCommentProps> = ({ postId }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const commentPost = (id: string) => {
    toast.success("Comming Soon...");
    // setLoading(true);
    // axios
    //   .delete(`/api/post/${id}`)
    //   .then(() => {
    //     toast.success("Post deleted successfully!");
    //   })
    //   .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
    //   .finally(() => setLoading(false));
  };

  // Loading State
  if (loading) return <Loader2 className="mr-2 h-4 w-4 animate-spin" />;

  return (
    <div
      onClick={() => commentPost(postId)}
      className="flex items-center cursor-pointer"
    >
      <MessageCircleIcon className="mr-1 h-4 w-4" />
      <span>{0}</span>
    </div>
  );
};

export default FeedItemComment;
