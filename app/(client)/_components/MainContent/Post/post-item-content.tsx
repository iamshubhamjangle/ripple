import { getTimeElapsed } from "@/app/_lib/timeElaped";
import FeedItemAvatar from "@/app/(client)/_components/MainContent/Feed/feed-item-avatar";

interface PostItemContentProps {
  authorName: string;
  authorImage: string;
  authorIdentifier: string;
  postCreatedAt: Date;
  postBody: string;
}

const PostItemContent: React.FC<PostItemContentProps> = ({
  authorName,
  authorImage,
  authorIdentifier,
  postCreatedAt,
  postBody,
}) => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <FeedItemAvatar avatarName={authorName} imageSrc={authorImage} />
        <div>
          <span className="text-lg font-bold mr-2 whitespace-nowrap overflow-hidden text-ellipsis">
            {authorName}
          </span>
          <div>
            <span className="text-sm text-muted-foreground mr-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem]">
              @{authorIdentifier}
            </span>
            <span className="text-sm text-muted-foreground mr-2">•</span>
            <span className="text-sm text-muted-foreground mr-2">
              {getTimeElapsed(postCreatedAt)}
            </span>
          </div>
        </div>
      </div>
      <div className="my-4">
        <p className="whitespace-pre-wrap">{postBody}</p>
      </div>
    </>
  );
};

export default PostItemContent;
