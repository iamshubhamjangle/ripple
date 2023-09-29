import FeedItemAvatar from "@/app/(client)/_components/MainContent/Feed/feed-item-avatar";
import FollowUnfollow from "@/app/(client)/_components/MainContent/UserProfile/follow-unfollow";

interface ExploreUserListProps {
  users: any;
}

const ExploreUserList: React.FC<ExploreUserListProps> = ({ users }) => {
  return (
    <div>
      {users &&
        users.map((user: any) => {
          return (
            <div key={user.id} className="my-10 flex justify-between">
              <div className="flex items-center">
                <div className="mr-2">
                  <FeedItemAvatar
                    imageSrc={user.image}
                    avatarName={user.name}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold mr-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    {user.name}
                  </span>
                  <span className="text-sm text-muted-foreground mr-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem]">
                    @{user.identifier}
                  </span>
                </div>
              </div>
              <div>
                <FollowUnfollow showFollowButton={true} userId={user.id} />
              </div>
            </div>
          );
        })}
      {/* <div className="max-w-2xl">
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default ExploreUserList;
