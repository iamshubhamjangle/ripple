import Link from "next/link";
import {
  Bot,
  Compass,
  HomeIcon,
  LucideSettings,
  TrendingUpIcon,
  Unlock,
  UserCircle2,
  UserPlus2,
} from "lucide-react";

import { serverAuth } from "@/app/_lib/serverAuth";

const SidebarNavLinks = async () => {
  const session = await serverAuth();

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
      href: `/user/${session?.user.id}`,
      icon: UserCircle2,
      secure: true,
      showOnLoggedIn: true,
    },
    {
      name: "Followers",
      href: "/followers",
      icon: Bot,
      secure: true,
      showOnLoggedIn: true,
    },
    {
      name: "Following",
      href: "/following",
      icon: UserPlus2,
      secure: true,
      showOnLoggedIn: true,
    },
    {
      name: "Trending",
      href: "/trending",
      icon: TrendingUpIcon,
      secure: true,
      showOnLoggedIn: true,
    },
    {
      name: "Explore",
      href: "/explore",
      icon: Compass,
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
            <li key={link.href}>
              <Link href={link.href}>
                <div className="flex">
                  <Icon className="mr-0 md:mr-2 h-6 w-6" />
                  <span className="hidden md:block">{link.name}</span>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default SidebarNavLinks;
