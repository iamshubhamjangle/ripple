"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { HelpCircle, LogOut, MoreHorizontal, Unlock } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/(client)/_components/ui/dropdown-menu";
import { ModeToggle } from "@/app/(client)/_components/ui/mode-toggle";
import UserNavProfilePic from "@/app/(client)/_components/LeftSidebar/user-nav-profile-pic";
import Link from "next/link";

interface UserNavProps {
  session: any;
}

const UserNav: React.FC<UserNavProps> = ({ session }) => {
  const router = useRouter();

  if (!session) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-between my-8">
          <UserNavProfilePic />
          <div className="flex flex-col">
            <span className="font-semibold">Shubham Jangle</span>
            <span className="text-sm text-muted-foreground">
              @shubhamjangle
            </span>
          </div>
          <MoreHorizontal />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <ModeToggle />
        <DropdownMenuItem onClick={() => {}}>
          <HelpCircle className="mr-2" /> Help & Support
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
