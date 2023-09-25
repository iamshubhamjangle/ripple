import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

interface PostItemNavbarProps {
  postId: string;
}

const PostItemNavbar: React.FC<PostItemNavbarProps> = ({ postId }) => {
  return (
    <div className="flex gap-4 items-center">
      <Link href="/">
        <ArrowLeftIcon className="w-6 h-6" />
      </Link>
      <span className="font-semibold text-lg">Post</span>
    </div>
  );
};

export default PostItemNavbar;
