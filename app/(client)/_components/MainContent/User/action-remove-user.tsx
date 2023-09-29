"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/app/(client)/_components/ui/button";

interface RemoveUserButtonProps {
  userId: string;
}

const RemoveUserButton: React.FC<RemoveUserButtonProps> = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onToggleFollow = async (userId: string) => {
    setLoading(true);
    await axios
      .post(`/api/user/removeFollower/${userId}`)
      .then(() => router.refresh())
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full space-x-4">
      <Button
        className="w-full md:w-fit py-2 h-auto"
        onClick={() => onToggleFollow(userId)}
        loading={loading}
        disabled={loading}
      >
        Remove
      </Button>
    </div>
  );
};

export default RemoveUserButton;
