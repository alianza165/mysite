import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

const options = ({
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
            'http://3.226.46.93:8000/accounts/token/',
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
            return {
              accessToken: access,
              refreshToken: refresh,
              user: { email: credentials.email }, // You can include more user info here if available
            };
          } else {
            return null; // Return null if credentials are invalid
          }
        } catch (error) {
          // Handle specific backend error
          if (error.response?.data?.email?.includes("Email is already registered")) {
            throw new Error("EMAIL_ALREADY_REGISTERED_CREDENTIALS");
          }
          console.error("Authorization error:", error);
          return null; // Return null if there's an error
        }
      }
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.AUTH_SECRET,
    encryption: true,
  },
callbacks: {
  async jwt({ token, account, user }) {
    // Handle Google sign-in
    if (account && account.provider === 'google') {
      try {
        const response = await fetch('http://3.226.46.93:8000/accounts/google/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${account.access_token}`, // Google access token
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user?.email,  // Assuming the email is available in the `user` object
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Google sign-in failed:', errorData);
          token.error = "GOOGLE_SIGNIN_FAILED"; // Set a custom error
          session.isAuthenticated = false;
          return token;
        }

        const data = await response.json();

        token.accessToken = data.access_token;  // Store the JWT access token
        token.refreshToken = data.refresh_token;  // Store the JWT refresh token
        token.accessTokenExpires = Date.now() + 300 * 1000;  // Assuming 1 hour expiry
        token.user = user;
      } catch (error) {
        console.error('Error fetching JWT token:', error);
        token.error = "GOOGLE_SIGNIN_FAILED";
        return token;
      }
    } 

    // Handle Credentials sign-in
    if (user && account?.provider === 'credentials') {
      token.accessToken = user.accessToken;
      token.refreshToken = user.refreshToken;
      token.accessTokenExpires = Date.now() + 300 * 1000;
      token.user = user;
    }

    // Return the token so it can be stored in the JWT
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

  async redirect({ url, baseUrl }) {
    // Handle the custom error and redirect to the login page with the appropriate message
    if (url.includes("/signin") && url.includes("error=GOOGLE_SIGNIN_FAILED")) {
      return `${baseUrl}/signin?error=Google sign-in failed. Please try again.`;
    }
    if (url.includes("/signin") && url.includes("error=EMAIL_ALREADY_REGISTERED_GOOGLE")) {
      return `${baseUrl}/signin?error=This email is already being used with another login method.`;
    }
    if (url.includes("/signin") && url.includes("error=EMAIL_ALREADY_REGISTERED_CREDENTIALS")) {
      return `${baseUrl}/signin?error=This email is already being used with another login method.`;
    }
    return url;
  },
},
  pages: {
    signIn: '/', // Redirect to the sign-in page on error
  },
});

export const { handlers, signIn, signOut, auth } = NextAuth(options)