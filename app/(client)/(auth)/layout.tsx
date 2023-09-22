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
    <div className="h-[100vh] flex items-center">
      <div className="grid grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-between h-[90vh]">
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex rounded-l-md bg-zinc-900 bg-signup-background bg-cover bg-center">
            <div className="relative z-20 flex items-center text-lg font-medium ">
              <LogoIcon className="h-8 w-8 mr-2" />
              <span className="text-primary font-black">Ripple</span>
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;Where Your Thoughts Create Waves - Share your moments,
                  spark conversations, and make ripples in the world with your
                  ideas.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="lg:p-8 border-y border-r rounded-r-md flex">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
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
