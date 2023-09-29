import { Metadata } from "next";
import Link from "next/link";
import { LogoIcon } from "@/app/(client)/_components/Icons/logoIcon";

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
    <>
      <div className="h-full w-full grid place-items-center">
        <div className="flex h-full w-full">
          <div className="hidden lg:flex flex-col justify-between w-1/2">
            <div className="flex flex-col-reverse h-full p-10 bg-zinc-900 bg-[url('/background.jpg')] bg-cover bg-center">
              <blockquote className="text-white font-semibold">
                &ldquo;Where Your Thoughts Create Waves - Share your moments,
                spark conversations, and make ripples in the world with our
                tweet-inspired platform.&rdquo;
              </blockquote>
            </div>
          </div>
          <div className="p-8 border flex w-full lg:w-1/2">
            <div className="mx-auto max-w-md flex flex-col justify-center space-y-6">
              <Link href="/" className="flex justify-center mb-8">
                <div className="flex items-center">
                  <LogoIcon className="h-8 w-8 mr-2" />
                  <span className="text-white font-black">Ripple</span>
                </div>
              </Link>
              {children}
              <p className="text-center text-xs text-muted-foreground max-w-md">
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
    </>
  );
}
