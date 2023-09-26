import { ReplyIcon } from "lucide-react";

const PostItemCommentActionComment = () => {
  return (
    <div className="flex items-center text-sm text-muted-foreground cursor-pointer">
      <ReplyIcon className="mr-1 h-4 w-4" />
    </div>
  );
};

export default PostItemCommentActionComment;
