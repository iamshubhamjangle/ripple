import Link from "next/link";
import { ModeToggle } from "@/app/(client)/_components/ui/mode-toggle";

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
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <ModeToggle />
      </li>
    </ul>
  );
};

export default SidebarNavLinks;
