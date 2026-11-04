# next-project

Learning project: a Next.js page that signs in with GitHub and signs out again.

## What it does

The home page (`/`) has a single button.

- Signed out, **Fazer login** starts GitHub sign-in and returns to `/`.
- Signed in, the button shows the GitHub account name and signs out.

`/auth/signin` is a custom sign-in page (heading **Faça Login**, button **Login com GitHub**). Auth is [NextAuth.js](https://next-auth.js.org/) v4 at `/api/auth/[...nextauth]`, using the GitHub provider. The UI copy is in Portuguese.

## Stack

- Next.js 14.2 (Pages Router), React 18, TypeScript
- NextAuth.js 4
- CSS modules (`styles/Home.module.css`) and `styles/globals.css`. Tailwind CSS 3 is set up and imported in the global stylesheet; the pages do not use Tailwind utility classes.

## Run locally

Node.js 18.17 or newer. Create a [GitHub OAuth App](https://github.com/settings/developers) with:

- Homepage URL: `http://localhost:3000`
- Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

```bash
npm install
cp .env.example .env.local
```

Put the OAuth client id and secret in `.env.local` as `CLIENT_ID` and `CLIENT_SECRET`. Also set `NEXTAUTH_URL=http://localhost:3000` and `NEXTAUTH_SECRET` (any long random string; `openssl rand -base64 32` works). `.env.local` is gitignored.

```bash
npm run dev
```

Open http://localhost:3000.

`npm run build` then `npm run start` serves a production build. `npm run lint` runs ESLint.

## License

MIT. See [LICENSE](LICENSE).
