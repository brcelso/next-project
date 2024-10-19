import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Define a página de login personalizada
  },
}

export default NextAuth(authOptions);
