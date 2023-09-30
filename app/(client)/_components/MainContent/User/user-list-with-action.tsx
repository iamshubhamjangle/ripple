import UserListItem from "@/app/(client)/_components/MainContent/User/user-list-item";
import FollowUnfollow from "@/app/(client)/_components/MainContent/User/action-follow-unfollow";

interface UserListWithActionProps {
  users: any;
}

/**
 * Render List of User With Follow/Unfollow Action
 * @param users List of users => { id, name, image, identifier }[]
 * @returns React.FC<T>
 */
const UserListWithAction: React.FC<UserListWithActionProps> = ({ users }) => {
  return (
    <div>
      {users &&
        users.map((user: any) => {
          return (
            <UserListItem
              key={user.id}
              id={user.id}
              name={user.name}
              image={user.image}
              identifier={user.identifier}
              actions={
                <FollowUnfollow showFollowButton={true} userId={user.id} />
              }
            />
          );
        })}
      {/* <div className="max-w-2xl">
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default UserListWithAction;
