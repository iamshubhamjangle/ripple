import { getTimeElapsed } from "@/app/_lib/timeElaped";
import Link from "next/link";

interface FeedItemHeaderProps {
  authorId: string;
  name: string;
  uniqueName: string;
  timestamp: Date;
}

const FeedItemHeader: React.FC<FeedItemHeaderProps> = ({
  authorId,
  name,
  timestamp,
  uniqueName,
}) => {
  return (
    <div className="flex flex-row flex-wrap items-center overflow-x-hidden">
      <Link href={`/user/${authorId}`}>
        <span className="text-lg font-bold mr-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </span>
      </Link>
      <Link href={`/user/${authorId}`}>
        <span className="text-sm text-muted-foreground mr-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem]">
          @{uniqueName}
        </span>
      </Link>
      <span className="text-sm text-muted-foreground mr-2">•</span>
      <span className="text-sm text-muted-foreground mr-2">
        {getTimeElapsed(timestamp)}
      </span>
    </div>
  );
};

export default FeedItemHeader;
