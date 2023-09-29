"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(client)/_components/ui/avatar";

interface FeedItemAvatarProps {
  imageSrc: string | null;
  avatarName: string | null;
}

const FeedItemAvatar: React.FC<FeedItemAvatarProps> = ({
  imageSrc,
  avatarName,
}) => {
  function getInitials(name: string) {
    if (!name) return "";
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.slice(0, 2).join(""); // Take the first two initials
  }

  return (
    <Avatar className="h-10 w-10 shadow-md">
      <AvatarImage src={imageSrc || undefined} alt="user avatar" />
      <AvatarFallback>{getInitials(avatarName || "")}</AvatarFallback>
    </Avatar>
  );
};

export default FeedItemAvatar;
