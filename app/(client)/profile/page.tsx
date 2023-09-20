"use client";

import Link from "next/link";
import { Button } from "@/app/(client)/_components/ui/button";

const UserProfile = () => {
  return (
    <div>
      <p>Hello From Profile Page</p>
      <Button>
        <Link href="/">Go back to Home Page</Link>
      </Button>
    </div>
  );
};

export default UserProfile;
