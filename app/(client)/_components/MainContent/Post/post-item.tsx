import PostItemNavbar from "@/app/(client)/_components/MainContent/Post/post-item-navbar";
import FeedItemAvatar from "../Feed/feed-item-avatar";
import { getTimeElapsed } from "@/app/_lib/timeElaped";
import FeedItemActions from "../Feed/feed-item-actions";

interface PostItemProps {
  post: any;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="max-w-3xl">
      <PostItemNavbar postId={post.id} />
      <div className="my-6">
        <div className="flex gap-4 items-center">
          <FeedItemAvatar
            avatarName={post.user.name}
            imageSrc={post.user.image}
          />
          <div>
            <span className="text-lg font-bold mr-2 whitespace-nowrap overflow-hidden text-ellipsis">
              {post.user.name}
            </span>
            <div>
              <span className="text-sm text-muted-foreground mr-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem]">
                @{post.user.identifier}
              </span>
              <span className="text-sm text-muted-foreground mr-2">•</span>
              <span className="text-sm text-muted-foreground mr-2">
                {getTimeElapsed(post.createdAt)}
              </span>
            </div>
          </div>
        </div>
        <div className="my-4">
          <p className="whitespace-pre-wrap">{post.body}</p>
        </div>
      </div>
      <FeedItemActions
        postId={post.id}
        authorId={post.user.id}
        likes={post.likes}
      />
    </div>
  );
};

export default PostItem;
