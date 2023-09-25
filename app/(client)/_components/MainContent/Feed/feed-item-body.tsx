import Link from "next/link";

interface FeedItemBodyProps {
  postId: string;
  postBody: string;
}

const FeedItemBody: React.FC<FeedItemBodyProps> = ({ postId, postBody }) => {
  return (
    <Link href={`/post/${postId}`}>
      <p className="whitespace-pre-wrap">{postBody}</p>
    </Link>
  );
};

export default FeedItemBody;
