"use client";

import { useSession } from "next-auth/react";
import { BadgeInfo } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/app/(client)/_components/ui/alert";

const UserProfile = () => {
  const { data: session }: any = useSession();
  // const { data: session }: any = useSession({ required: true }); // If not using middleware.js

  return (
    <div>
      <Alert className="bg-yellow-50">
        <BadgeInfo className="h-4 w-4" color="orange" />
        <AlertTitle>
          This is Protected Server Component Using Middleware. Check
          `middleware.js` for more info.
        </AlertTitle>
        <AlertDescription>
          Fetched Session: {JSON.stringify(session)}
        </AlertDescription>
      </Alert>
      <div>Hello From Profile Page</div>
    </div>
  );
};

export default UserProfile;
