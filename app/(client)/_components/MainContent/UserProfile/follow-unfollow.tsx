"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/app/(client)/_components/ui/button";

interface FollowUnfollowProps {
  userId: string;
  showFollowButton: boolean;
}

const FollowUnfollow: React.FC<FollowUnfollowProps> = ({
  userId,
  showFollowButton,
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onToggleFollow = async (userId: string) => {
    setLoading(true);
    await axios
      .post(`/api/user/${userId}/follow`)
      .then(() => router.refresh())
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full space-x-4">
      {showFollowButton && (
        <Button
          className="w-full md:w-fit py-2 h-auto"
          onClick={() => onToggleFollow(userId)}
          loading={loading}
          disabled={loading}
        >
          Follow
        </Button>
      )}
      {!showFollowButton && (
        <Button
          size={"lg"}
          className="w-full md:w-fit py-2 h-auto"
          onClick={() => onToggleFollow(userId)}
          loading={loading}
          disabled={loading}
        >
          Unfollow
        </Button>
      )}
    </div>
  );
};

export default FollowUnfollow;
