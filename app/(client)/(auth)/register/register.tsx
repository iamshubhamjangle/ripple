"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

import { Button } from "@/app/(client)/_components/ui/button";
import { Input } from "@/app/(client)/_components/ui/input";
import { Label } from "@/app/(client)/_components/ui/label";

const Register = ({ searchParams }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegisterUser = (formInput: FormData) => {
    setLoading(true);
    const name = formInput.get("name");
    const email = formInput.get("email");
    const password = formInput.get("password");
    const data = { name, email, password };

    axios
      .post("/api/auth/register", data)
      .then(() =>
        toast.success("Registration successfull! Please login to continue")
      )
      .then(() =>
        // After login, callback to requested page.
        router.replace(
          searchParams?.callbackUrl
            ? `/login?callbackUrl=${encodeURIComponent(
                searchParams?.callbackUrl
              )}`
            : "/login"
        )
      )
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="m-4">
      <h1 className="font-bold text-2xl my-3">Register</h1>
      <form action={handleRegisterUser} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="name">Your Full Name</Label>
          <Input id="name" type="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" name="password" required />
        </div>
        <Button type="submit" loading={loading} disabled={loading}>
          Register
        </Button>
        {searchParams?.callbackUrl ? (
          <a
            href={`/login?callbackUrl=${encodeURIComponent(
              searchParams?.callbackUrl
            )}`}
          >
            Already having a account? Login instead.
          </a>
        ) : (
          <a href={`/login`}>Already having a account? Login instead.</a>
        )}
      </form>
    </div>
  );
};

export default Register;
