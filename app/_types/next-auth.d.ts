import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      identifier: string;
    } & DefaultSession["user"];
  }

  interface User {
    identifier: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    identifier: string;
  }
}
