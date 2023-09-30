import FeedItemAvatar from "@/app/(client)/_components/MainContent/Feed/feed-item-avatar";
import Link from "next/link";

interface UserListItemProps {
  id: string;
  name: string | null;
  image: string | null;
  identifier: string;
  actions?: React.ReactNode;
}

const UserListItem: React.FC<UserListItemProps> = ({
  id,
  identifier,
  image,
  name,
  actions,
}) => {
  return (
    <div className="my-8 flex justify-between">
      <div className="flex items-center">
        <div className="mr-2">
          <FeedItemAvatar imageSrc={image} avatarName={name} />
        </div>
        <div className="flex flex-col">
          <Link href={`/user/${id}`}>
            <span className="text-base font-bold mr-2 whitespace-nowrap overflow-hidden text-ellipsis">
              {name}
            </span>
          </Link>
          <Link href={`/user/${id}`}>
            <span className="text-sm text-muted-foreground mr-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem]">
              @{identifier}
            </span>
          </Link>
        </div>
      </div>
      <div className="flex gap-2">{actions}</div>
    </div>
  );
};

export default UserListItem;
