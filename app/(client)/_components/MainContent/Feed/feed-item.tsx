import { Card, CardContent } from "@/app/(client)/_components/ui/card";
import { getTimeElapsed } from "@/app/_lib/timeElaped";
import FeedItemDelete from "@/app/(client)/_components/MainContent/Feed/feed-item-delete";
import FeedItemLikeDislike from "@/app/(client)/_components/MainContent/Feed/feed-item-like-dislike";
import FeedItemComment from "@/app/(client)/_components/MainContent/Feed/feed-item-comment";
import FeedItemShare from "@/app/(client)/_components/MainContent/Feed/feed-item-share";
import FeedItemAvatar from "@/app/(client)/_components/MainContent/Feed/feed-item-avatar";

interface FeedItemProps {
  id: string;
  authorId: string;
  authorProfilePicture?: string | null;
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
  authorProfilePicture,
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
      <CardContent className="bg-secondary p-0">
        <div className="flex gap-4 p-4">
          <FeedItemAvatar imageSrc={authorProfilePicture} avatarName={name} />
          <div className="flex flex-col gap-3">
            <div className="flex flex-row flex-wrap items-center overflow-x-hidden">
              <span className="text-lg font-bold mr-2 whitespace-nowrap overflow-hidden text-ellipsis">
                {name}
              </span>
              <span className="text-sm text-muted-foreground mr-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem]">
                @{uniqueName}
              </span>
              <span className="text-sm text-muted-foreground mr-2">•</span>
              <span className="text-sm text-muted-foreground mr-2">
                {getTimeElapsed(timestamp)}
              </span>
            </div>
            <p className="whitespace-pre-wrap">{body}</p>
            <div className="flex flex-row flex-wrap items-center space-x-8 text-sm text-muted-foreground">
              <FeedItemLikeDislike likes={likes} postId={id} />
              <FeedItemComment postId={id} />
              <FeedItemShare postId={id} />
              <FeedItemDelete postId={id} authorId={authorId} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedItem;
