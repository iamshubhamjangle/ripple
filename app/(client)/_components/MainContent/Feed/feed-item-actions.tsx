import FeedItemDelete from "@/app/(client)/_components/MainContent/Feed/feed-item-action-delete";
import FeedItemLikeDislike from "@/app/(client)/_components/MainContent/Feed/feed-item-action-like-dislike";
import FeedItemComment from "@/app/(client)/_components/MainContent/Feed/feed-item-action-comment";
import FeedItemShare from "@/app/(client)/_components/MainContent/Feed/feed-item-action-share";

interface FeedItemActionsProps {
  postId: string;
  likes: { id: string; userId: string; postId: string }[];
  authorId: string;
}

const FeedItemActions: React.FC<FeedItemActionsProps> = ({
  postId,
  likes,
  authorId,
}) => {
  return (
    <div className="flex flex-row flex-wrap items-center space-x-8 text-sm text-muted-foreground">
      <FeedItemLikeDislike likes={likes} postId={postId} />
      <FeedItemComment postId={postId} />
      <FeedItemShare postId={postId} />
      <FeedItemDelete postId={postId} authorId={authorId} />
    </div>
  );
};

export default FeedItemActions;
