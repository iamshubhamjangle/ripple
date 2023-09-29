import UserListItem from "./user-list-item";

interface UserListWithActionProps {
  users: any;
  showFollowButton: boolean;
}

/**
 * Render List of User With Follow/Unfollow Action
 * @param users List of users => { id, name, image, identifier }[]
 * @param showFollowButton Boolean. Whether to show follow button or unfollow button.
 * @returns React.FC<T>
 */
const UserListWithAction: React.FC<UserListWithActionProps> = ({
  users,
  showFollowButton,
}) => {
  return (
    <div>
      {users &&
        users.map((user: any) => {
          return (
            <UserListItem
              key={user.id}
              id={user.id}
              identifier={user.identifier}
              image={user.image}
              name={user.name}
              showFollowButton={showFollowButton}
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
