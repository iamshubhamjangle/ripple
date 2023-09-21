"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(client)/_components/ui/avatar";
import { Button } from "@/app/(client)/_components/ui/button";
import { useSession } from "next-auth/react";

const UserNavProfilePic = () => {
  const { data: session } = useSession();

  function getInitials(name: string) {
    if (!name) return "";
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.slice(0, 2).join(""); // Take the first two initials
  }

  return (
    <Button
      variant="ghost"
      className="relative h-8 w-8 rounded-full shadow-sm mr-2"
    >
      <Avatar className="h-8 w-8">
        <AvatarImage src={session?.user?.image || ""} alt="user avatar" />
        <AvatarFallback>{getInitials(session?.user?.name)}</AvatarFallback>
      </Avatar>
    </Button>
  );
};

export default UserNavProfilePic;
