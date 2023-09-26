import FeedItemDelete from "@/app/(client)/_components/MainContent/Feed/feed-item-action-delete";
import FeedItemLikeDislike from "@/app/(client)/_components/MainContent/Feed/feed-item-action-like-dislike";
import FeedItemComment from "@/app/(client)/_components/MainContent/Feed/feed-item-action-comment";
import FeedItemShare from "@/app/(client)/_components/MainContent/Feed/feed-item-action-share";
import { Like } from "@prisma/client";

interface FeedItemActionsProps {
  postId: string;
  likes: Like[];
  authorId: string;
  commentsCount: number;
}

const FeedItemActions: React.FC<FeedItemActionsProps> = ({
  postId,
  likes,
  authorId,
  commentsCount,
}) => {
  return (
    <div className="flex flex-row flex-wrap items-center space-x-8 text-sm text-muted-foreground">
      <FeedItemLikeDislike postId={postId} likes={likes} />
      <FeedItemComment postId={postId} commentsCount={commentsCount} />
      <FeedItemShare postId={postId} />
      <FeedItemDelete postId={postId} authorId={authorId} />
    </div>
  );
};

export default FeedItemActions;
