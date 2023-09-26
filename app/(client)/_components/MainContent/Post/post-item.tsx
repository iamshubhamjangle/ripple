import PostItemNavbar from "@/app/(client)/_components/MainContent/Post/post-item-navbar";
import FeedItemActions from "@/app/(client)/_components/MainContent/Feed/feed-item-actions";
import PostItemContent from "@/app/(client)/_components/MainContent/Post/post-item-content";
import PostItemComment from "@/app/(client)/_components/MainContent/Post/post-item-comment";
import { Separator } from "@/app/(client)/_components/ui/separator";

interface PostItemProps {
  post: any;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="max-w-3xl my-6 space-y-4">
      <PostItemNavbar postId={post.id} />
      <PostItemContent
        authorName={post.user.name}
        authorIdentifier={post.user.identifier}
        authorImage={post.user.image}
        postBody={post.body}
        postCreatedAt={post.createdAt}
      />
      <FeedItemActions
        postId={post.id}
        authorId={post.user.id}
        likes={post.likes}
      />
      <Separator />
      <PostItemComment />
    </div>
  );
};

export default PostItem;
