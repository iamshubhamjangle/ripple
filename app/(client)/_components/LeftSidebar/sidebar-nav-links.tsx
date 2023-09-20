import Link from "next/link";
import {
  HomeIcon,
  LucideSettings,
  Unlock,
  UserCircle2,
  UserPlus2,
} from "lucide-react";

import { getServerSessionWithoutUser } from "@/app/_lib/serverAuth";

const SidebarNavLinks = async () => {
  const session = await getServerSessionWithoutUser();

  const links = [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
      secure: false,
      showOnLoggedIn: true,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: UserCircle2,
      secure: true,
      showOnLoggedIn: true,
    },
    {
      name: "Followers",
      href: "/followers",
      icon: UserPlus2,
      secure: true,
      showOnLoggedIn: true,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: LucideSettings,
      secure: true,
      showOnLoggedIn: true,
    },
    {
      name: "Login / Register",
      href: "/login",
      icon: Unlock,
      secure: false,
      showOnLoggedIn: false,
    },
  ];

  return (
    <ul className="space-y-5">
      {links &&
        links.map((link) => {
          if (!session && link.secure) return null;
          if (session && !link.showOnLoggedIn) return null;

          const Icon = link.icon;
          return (
            <li key={link.href} className="flex">
              <Icon className="mr-2 h-6 w-6" />
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default SidebarNavLinks;
