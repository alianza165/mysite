import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

interface CustomUser extends User {
  accessToken: string;
  refreshToken: string;
}

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            'https://www.princeautomation.org/accounts/token/',
            {
              username: credentials.email,
              password: credentials.password,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (response.status === 200) {
            const { access, refresh } = response.data;
            return { email: credentials.email as string };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      }
    }),
  ],
  session: {
    strategy: 'jwt' as const,
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && account.provider === 'google') {
        const response = await fetch('https://www.princeautomation.org/accounts/google/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${account.id_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user?.email,
          }),
        });
        const data = await response.json();
        token.accessToken = data.access_token;
        token.refreshToken = data.refresh_token;
        token.accessTokenExpires = Date.now() + 300 * 1000;
        token.user = user;
      }
      if (user && account?.provider === 'credentials') {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = Date.now() + 300 * 1000;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.error) {
        session.error = token.error;
        session.isAuthenticated = false;
      } else {
        session.user = token.user;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.accessTokenExpires = token.accessTokenExpires;
        session.isAuthenticated = true;
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(options);
