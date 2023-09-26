"use client";

import { ReplyIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/app/(client)/_components/ui/dropdown-menu";
import PostItemCommentForm from "./post-item-comment-form";
import { useState } from "react";

interface PostItemCommentActionCommentProps {
  postId: string;
  identifier: string;
}

const PostItemCommentActionComment: React.FC<
  PostItemCommentActionCommentProps
> = ({ postId, identifier }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <DropdownMenu
      open={isDropdownOpen}
      onOpenChange={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <DropdownMenuTrigger asChild>
        <ReplyIcon className="mr-1 h-4 w-4 text-muted-foreground cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96" side="bottom" align="start">
        <DropdownMenuLabel>Replying to @{identifier}</DropdownMenuLabel>
        <PostItemCommentForm
          postId={postId}
          closeDropdown={closeDropdown}
          initialCommentBody={`@${identifier} `}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostItemCommentActionComment;
