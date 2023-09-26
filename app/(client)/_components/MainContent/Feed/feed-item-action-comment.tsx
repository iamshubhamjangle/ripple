import Link from "next/link";
import { MessageCircleIcon } from "lucide-react";

interface FeedItemCommentProps {
  postId: string;
  commentsCount: number;
}

const FeedItemComment: React.FC<FeedItemCommentProps> = ({
  postId,
  commentsCount,
}) => {
  return (
    <Link href={`/post/${postId}`} className="flex items-center cursor-pointer">
      <MessageCircleIcon className="mr-1 h-4 w-4" />
      <span>{commentsCount || 0}</span>
    </Link>
  );
};

export default FeedItemComment;
