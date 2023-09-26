import { getTimeElapsed } from "@/app/_lib/timeElaped";

interface PostItemCommentHeaderProps {
  name: string;
  uniqueName: string;
  timestamp: Date;
}

const PostItemCommentHeader: React.FC<PostItemCommentHeaderProps> = ({
  name,
  timestamp,
  uniqueName,
}) => {
  return (
    <div className="flex flex-row flex-wrap items-center overflow-x-hidden">
      <span className="font-medium mr-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </span>
      <span className="text-xs text-muted-foreground mr-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem]">
        @{uniqueName}
      </span>
      <span className="text-sm text-muted-foreground mr-2">•</span>
      <span className="text-xs text-muted-foreground mr-2">
        {getTimeElapsed(timestamp)}
      </span>
    </div>
  );
};

export default PostItemCommentHeader;
