import { Card, CardContent } from "@/app/(client)/_components/ui/card";
import { getTimeElapsed } from "@/app/_lib/timeElaped";
import { HeartIcon, MessageCircleIcon, Share2Icon } from "lucide-react";

interface FeedItemProps {
  name: string;
  uniqueName: string;
  timestamp: Date;
  body: string;
  likes: number;
  comments: number;
  shares: number;
}

const FeedItem: React.FC<FeedItemProps> = ({
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
        <div>{body}</div>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center cursor-pointer">
            <HeartIcon className="mr-1 h-4 w-4" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <MessageCircleIcon className="mr-1 h-4 w-4" />
            <span>{comments}</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <Share2Icon className="mr-1 h-4 w-4" />
            <span>{shares}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedItem;
