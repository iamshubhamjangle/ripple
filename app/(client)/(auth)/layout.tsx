import { Metadata } from "next";
import Link from "next/link";
import { LogoIcon } from "../_components/Icons/logoIcon";

export const metadata: Metadata = {
  title: "Ripple/Auth",
  description: "A new world of Rippling!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full grid place-items-center">
      <div className="flex h-[90vh]">
        <div className="hidden lg:flex flex-col justify-between w-1/2">
          <div className="flex flex-col h-full p-10 justify-between rounded-l-md bg-zinc-900 bg-signup-background bg-cover bg-center">
            <div className="flex items-center">
              <LogoIcon className="h-8 w-8 mr-2" />
              <span className="text-primary font-black">Ripple</span>
            </div>
            <blockquote>
              &ldquo;Where Your Thoughts Create Waves - Share your moments,
              spark conversations, and make ripples in the world with your
              ideas.&rdquo;
            </blockquote>
          </div>
        </div>
        <div className="p-8 border rounded lg:rounded-r-md flex w-full lg:w-1/2">
          <div className="mx-auto w-full flex flex-col justify-center space-y-6">
            {children}
            <p className="px-8 text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
