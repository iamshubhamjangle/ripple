import Link from "next/link";

const SidebarNavLinks = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/followers">Followers</Link>
      </li>
      <li>
        <Link href="/settings">Settings</Link>
      </li>
    </ul>
  );
};

export default SidebarNavLinks;
