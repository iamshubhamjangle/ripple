import { getTimeElapsed } from "@/app/_lib/timeElaped";

interface FeedItemHeaderProps {
  name: string;
  uniqueName: string;
  timestamp: Date;
}

const FeedItemHeader: React.FC<FeedItemHeaderProps> = ({
  name,
  timestamp,
  uniqueName,
}) => {
  return (
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
  );
};

export default FeedItemHeader;
