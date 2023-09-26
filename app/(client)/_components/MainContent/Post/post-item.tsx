import { Separator } from "@/app/(client)/_components/ui/separator";
import FeedItemActions from "@/app/(client)/_components/MainContent/Feed/feed-item-actions";
import PostItemNavbar from "@/app/(client)/_components/MainContent/Post/post-item-navbar";
import PostItemContent from "@/app/(client)/_components/MainContent/Post/post-item-content";
import PostItemComments from "@/app/(client)/_components/MainContent/Post/post-item-comment";
import PostItemCommentForm from "@/app/(client)/_components/MainContent/Post/post-item-comment-form";

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
        commentsCount={post._count.comments}
      />
      <Separator />
      <PostItemCommentForm postId={post.id} />
      <PostItemComments postId={post.id} comments={post.comments} />
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </div>
  );
};

export default PostItem;
