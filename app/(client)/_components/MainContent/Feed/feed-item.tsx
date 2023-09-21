import { Card, CardContent } from "@/app/(client)/_components/ui/card";
import { getTimeElapsed } from "@/app/_lib/timeElaped";
import { HeartIcon, MessageCircleIcon, Share2Icon } from "lucide-react";
import FeedItemDelete from "./feed-item-delete";
import FeedItemLikeDislike from "./feed-item-like-dislike";
import FeedItemComment from "./feed-item-comment";
import FeedItemShare from "./feed-item-share";

interface FeedItemProps {
  id: string;
  authorId: string;
  name: string;
  uniqueName: string;
  timestamp: Date;
  body: string;
  likes: {
    id: string;
    userId: string;
    postId: string;
  }[];
  comments: number;
  shares: number;
}

const FeedItem: React.FC<FeedItemProps> = ({
  id,
  authorId,
  name,
  uniqueName,
  timestamp,
  body,
  likes,
  comments,
  shares,
}) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 p-6 bg-secondary">
        <div className="flex items-center overflow-x-hidden">
          <span className="text-lg font-bold mr-2">{name}</span>
          <span className="text-sm text-muted-foreground mr-2">
            @{uniqueName}
          </span>
          <span className="text-sm text-muted-foreground mr-2">•</span>
          <span className="text-sm text-muted-foreground mr-2">
            {getTimeElapsed(timestamp)}
          </span>
        </div>
        <p className="whitespace-pre-wrap">{body}</p>
        <div className="flex items-center space-x-8 text-sm text-muted-foreground">
          <FeedItemLikeDislike likes={likes} postId={id} />
          <FeedItemComment postId={id} />
          <FeedItemShare postId={id} />
          <FeedItemDelete postId={id} authorId={authorId} />
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedItem;
