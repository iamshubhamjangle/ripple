"use client";

import axios from "axios";
import { Loader2, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

interface FeedItemDeleteProps {
  postId: string;
  authorId: string;
}

const FeedItemDelete: React.FC<FeedItemDeleteProps> = ({
  postId,
  authorId,
}) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const deletePost = (id: string) => {
    setLoading(true);
    axios
      .delete(`/api/post/${id}`)
      .then(() => {
        toast.success("Post deleted successfully!");
      })
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => setLoading(false));
  };

  // Render Delete button only if the authorId matches with currently loggedIn userId.
  if (session?.user.id !== authorId) return null;

  // Loading State
  if (loading) return <Loader2 className="mr-2 h-4 w-4 animate-spin" />;

  return (
    <Trash2
      className="mr-1 h-4 w-4 cursor-pointer"
      color="#B22222"
      onClick={() => deletePost(postId)}
    />
  );
};

export default FeedItemDelete;
