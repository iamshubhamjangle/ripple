import { HeartIcon, ReplyIcon } from "lucide-react";

const PostItemCommentActions = () => {
  return (
    <div className="mt-3 flex gap-8">
      <HeartIcon className="mr-1 h-4 w-4" />
      <ReplyIcon className="mr-1 h-4 w-4" />
    </div>
  );
};

export default PostItemCommentActions;
