import NextAuth from "next-auth"; //function
import GithubProvider from "next-auth/providers/github";
// take values from object ---> destructure
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    //multiple providers
    GithubProvider({
      //function
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
