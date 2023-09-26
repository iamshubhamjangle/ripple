import { Separator } from "@/app/(client)/_components/ui/separator";
import FeedItemAvatar from "@/app/(client)/_components/MainContent/Feed/feed-item-avatar";
import PostItemCommentHeader from "@/app/(client)/_components/MainContent/Post/post-item-comment-header";
import PostItemCommentActions from "@/app/(client)/_components/MainContent/Post/post-item-comment-actions";

interface PostItemCommentProps {
  comments: any;
}

const PostItemComments: React.FC<PostItemCommentProps> = async ({
  comments,
}) => {
  if (!comments) return null;

  return (
    <div className="space-y-2">
      <h2>Comments</h2>
      {comments.map((comment: any) => {
        return (
          <div key={comment.id}>
            <div className="flex flex-row gap-2 py-2">
              <FeedItemAvatar
                avatarName={comment.user.name || ""}
                imageSrc={comment.user.image}
              />
              <div>
                <PostItemCommentHeader
                  name={comment.user.name || ""}
                  uniqueName={comment.user.identifier}
                  timestamp={comment.createdAt}
                />
                <div className="text-base">{comment.body}</div>
                <PostItemCommentActions />
              </div>
            </div>
            <Separator />
          </div>
        );
      })}
    </div>
  );
};

export default PostItemComments;
