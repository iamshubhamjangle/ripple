import FeedItemAvatar from "@/app/(client)/_components/MainContent/Feed/feed-item-avatar";
import FollowUnfollow from "@/app/(client)/_components/MainContent/UserProfile/follow-unfollow";

interface UserListItemProps {
  id: string;
  image: string;
  name: string;
  identifier: string;
  showFollowButton: boolean;
}

const UserListItem: React.FC<UserListItemProps> = ({
  id,
  identifier,
  image,
  name,
  showFollowButton,
}) => {
  return (
    <div className="my-8 flex justify-between">
      <div className="flex items-center">
        <div className="mr-2">
          <FeedItemAvatar imageSrc={image} avatarName={name} />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold mr-2 whitespace-nowrap overflow-hidden text-ellipsis">
            {name}
          </span>
          <span className="text-sm text-muted-foreground mr-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem]">
            @{identifier}
          </span>
        </div>
      </div>
      <div>
        <FollowUnfollow showFollowButton={showFollowButton} userId={id} />
      </div>
    </div>
  );
};

export default UserListItem;
