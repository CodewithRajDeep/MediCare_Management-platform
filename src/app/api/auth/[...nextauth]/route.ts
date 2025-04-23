import NextAuth, { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/lib/actions/user.action";


const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      } as any,
      async authorize(credentials) {
        if (credentials?.email && credentials?.password) {
          const user = await loginUser(credentials.email, credentials.password);
          if (user) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
