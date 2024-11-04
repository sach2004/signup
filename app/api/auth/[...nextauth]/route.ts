import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        type: { label: "Type", type: "hidden" }
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Missing credentials");

        }

       
        const { email, password, type } = credentials;


       
        const user = await prisma.user.findUnique({
          where: { email }
        });

        if (!user) {
          throw new Error("No user found with this email");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        

        return { id: user.id.toString(), name: user.name, email: user.email  };
      }
    })
  ],
  pages: {
    signIn: '/auth/signin', 
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }: any) {
      if (token) {
        session.user = {
          id: token.id,
        };
      }
      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
