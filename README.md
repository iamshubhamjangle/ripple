User Stories

- ~~Fix LeftNav UserProfile Name, Identifier~~
- ~~Add picture to FeedItem~~
- ~~Update Login/Signup screen UI~~
- ~~Responsive Design - Mobile/Desktop~~
- ~~Like/Unlike/Delete/Create from Client component doesn't refetch data on the page.~~
- Share Post - Generate a share URL and copy it to clipboard
- Comment Post
- Explore Page - Follow people
- Followers Page
- Following Page
- Trending Section - Render Top 5 Liked Posts in last 24hrs
- Optimistic Delete
- Optimistic Like

## Getting Started

Install the dependencies

```
npm i
```

Edit the `.env` file

```
# To generate 32 bit secret > openssl rand -base64 32 | paste --delimiters '' --serial
NODE_ENV="development"

# Database
DATABASE_URL=postgres://id:password@localhost:5432/2-ripple-clone
DIRECT_URL=postgres://id:password@localhost:5432/2-ripple-clone
# SHADOW_DATABASE_URL=...

# Next Auth
NEXTAUTH_URL=http://localhost:3000/
NEXTAUTH_SECRET="..."
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# Reset Password >
JWT_RESET_PASSWORD_SECRET="..."

# Email Services
# Base URL is Used while sending email for forgot-password template
BASE_URL="http://localhost:3000"
# AWS SES keys
AWS_SES_USER_ACCESS_KEY="..."
AWS_SES_USER_ACCESS_SECRET="..."
AWS_SES_REGION="us-east-2"
AWS_SES_SENDER="yourverifiedemail@gmail.com"
```

After Create/Modifing the Prisma schema

```
npx prisma generate
```

(DONT_USE_IN_PRODUCTION) Push the prisma.schema to Postgre DB, this can reset the db in case of major changes as this is used only to quickly prototype, iterate and get db to desired end-state

```js
npx prisma db push
// npx prisma generate will be triggered automatically
```

Migrations

```
npx prisma migrate dev --name migration-name --create-only
// Edit any migrations if required (Major changes/Conflicts)
npx prisma migrate dev
// Restart the prisma studio
```

Run the development server:

```
npm run dev
```

Run Prisma Studio to view DB entries in browser

```
npm run db
```

Open http://localhost:3000 with your browser to see the result.

## Setting up AWS SES (Simple Email Service)

- This service is used when user clicks on forgot password, following are the steps to enable AWS SES with you AWS account
- Create a new IAM user with SES Full Access Policy. Create it's access key, secret
- Create a SES identity with your email address
- `npm i @aws-sdk/client-ses aws-crt`
- Add environment variables as mentioned in getting started

## Form Error Handling References

- API side: https://github.com/iamshubhamjangle/todo-list-next-app/blob/master/app/(server)/(actions)/todo.ts
- Client side: https://github.com/iamshubhamjangle/next-auth-app-shadcn-prisma/blob/master/app/(client)/settings/settings.tsx

## Route Protection

### Client Side

This can be done using middleware.js (Preffered)

```js
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile"],
};
```

Or else we can use `useSession()` as shown below

```js
const { data: session }: any = useSession({ required: true });
// { required: true } redirects user back to signin page onUnauthenticated
```

### Server Side

This can be done using middleware.js (Preffered)

```js
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/settings"],
};
```

Or else we can use `getServerSession()` as shown below

```jsx
const Protected = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    const headersList = headers();
    const currentPathName = headersList.get("x-invoke-path") || "";
    currentPathName
      ? redirect("/login?callbackUrl=" + currentPathName)
      : redirect("/login");
  }

  return <>Hello World!</>;
};

export default Protected;
```

## Server Actions

Server actions are enabled with this project, though we are not using them.

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
```

To know how to use server actions, check out this todo list project:

- `createTodoSamePage()` Function Definition here https://github.com/iamshubhamjangle/todo-list-next-app/blob/master/app/(server)/(actions)/todo.ts
- `createTodoSamePage()` Function Consumed here https://github.com/iamshubhamjangle/todo-list-next-app/blob/da9470c2e34badaa602f1e0092159964470df642/app/(client)/_components/createTodoForm.tsx
- Learn more here https://nextjs.org/docs/app/api-reference/functions/server-actions

## Credits:

<ul>
<li>
<a href="https://iconscout.com/icons/twitter" target="_blank">Free Twitter Logo Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia</a>
</li>
</ul>

whitespace-nowrap overflow-hidden text-ellipsis
