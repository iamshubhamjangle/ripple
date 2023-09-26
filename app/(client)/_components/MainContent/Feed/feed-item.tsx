import { Like } from "@prisma/client";

import { Card, CardContent } from "@/app/(client)/_components/ui/card";
import FeedItemAvatar from "@/app/(client)/_components/MainContent/Feed/feed-item-avatar";
import FeedItemBody from "@/app/(client)/_components/MainContent/Feed/feed-item-body";
import FeedItemActions from "@/app/(client)/_components/MainContent/Feed/feed-item-actions";
import FeedItemHeader from "@/app/(client)/_components/MainContent/Feed/feed-item-header";

interface FeedItemProps {
  id: string;
  authorId: string;
  authorProfilePicture?: string | null;
  name: string;
  uniqueName: string;
  timestamp: Date;
  body: string;
  likes: Like[];
  commentsCount: number;
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
  commentsCount,
  shares,
}) => {
  return (
    <Card>
      <CardContent className="bg-secondary p-0">
        <div className="flex gap-4 p-4">
          <FeedItemAvatar imageSrc={authorProfilePicture} avatarName={name} />
          <div className="flex flex-col gap-3">
            <FeedItemHeader
              name={name}
              timestamp={timestamp}
              uniqueName={uniqueName}
            />
            <FeedItemBody postId={id} postBody={body} />
            <FeedItemActions
              postId={id}
              likes={likes}
              authorId={authorId}
              commentsCount={commentsCount}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedItem;
