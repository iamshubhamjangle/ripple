"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { Button } from "@/app/(client)/_components/ui/button";
import { Input } from "@/app/(client)/_components/ui/input";
import { Label } from "@/app/(client)/_components/ui/label";
import { useRouter } from "next/navigation";

const ForgotPassword: React.FC<any> = ({ searchParams }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { token } = searchParams;

  // Sends a request to get password reset link email
  const passwordRecovery = async (e: any) => {
    e.preventDefault();

    const email = e?.target?.email?.value;

    if (!email) {
      toast.error("Email is a required field");
      return; // TODO: Form Error
    }

    setLoading(true);
    axios
      .post("/api/auth/forgot-password", { email })
      .then(() => {
        toast.success(
          "Email sent successfully. Please check your mailbox for further steps."
        );
        router.push("/");
      })
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => setLoading(false));
  };

  // Sends a require to update password with valid token
  const passwordUpdate = async (e: any) => {
    e.preventDefault();

    const password = e?.target?.password?.value;
    const confirmPassword = e?.target?.confirmPassword?.value;

    if (!password || !confirmPassword) {
      toast.error("Both Password and Confirm Password are required fields");
      return; // TODO: Form Error
    }

    if (password !== confirmPassword) {
      toast.error("Both Password and Confirm Password must match");
      return; // TODO: Form Error
    }

    setLoading(true);
    axios
      .put("/api/auth/forgot-password", { password, token })
      .then(() => {
        toast.success(
          "Password updated successfully. Please login with your new credentials"
        );
        router.replace("/login");
      })
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => setLoading(false));
  };

  if (!token) {
    return (
      <div className="m-4">
        <h1 className="font-bold text-2xl my-3">
          Recover your account password
        </h1>
        <form onSubmit={passwordRecovery} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="email">Your Email</Label>
            <Input id="email" type="email" name="email" required />
          </div>
          <Button type="submit" disabled={loading} loading={loading}>
            Submit
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="m-4">
      <h1 className="font-bold text-2xl my-3">Change your account password</h1>
      <form onSubmit={passwordUpdate} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="password">New Password</Label>
          <Input id="password" type="password" name="password" required />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            required
          />
        </div>
        <Button type="submit" disabled={loading} loading={loading}>
          Update your password
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
