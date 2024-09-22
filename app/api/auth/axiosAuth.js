import axios from 'axios';
import { getSession, signOut } from 'next-auth/react';

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async (config) => {
    let session = await getSession();  // Fetch the session on the client side

    if (session) {
      const currentDate = new Date();
      const tokenExpiryDate = new Date(session.accessTokenExpires);

      // Check if the token has expired
      if (currentDate >= tokenExpiryDate) {
        // Token is expired, try to refresh it
        session = await refreshAccessToken(session);
        if (session.error) {
          // Handle token refresh error (e.g., log the user out)
          await signOut({ redirect: false }); // Log the user out without redirect
          return Promise.reject(new Error(session.error));
        }
      }

      // Token is still valid, attach it to the request
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function refreshAccessToken(session) {
  try {
    const response = await fetch('http://3.226.46.93:8000/accounts/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh: session.refreshToken,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log('Token refresh failed:', errorData);

      if (errorData?.detail === "Token is invalid or expired") {
        await signOut({ redirect: false }); // Log the user out without redirect
        return {
          ...session,
          error: "Your session has expired, please sign in again.",
        };
      }

      throw new Error("Token refresh failed");
    }

    const refreshedTokens = await response.json();

    return {
      ...session,
      accessToken: refreshedTokens.access,
      accessTokenExpires: Date.now() + 300 * 1000,  // Assuming 1 hour expiry
      refreshToken: refreshedTokens.refresh ?? session.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);

    await signOut({ redirect: false }); // Log the user out without redirect
    return {
      ...session,
      error: "Your session has expired, please sign in again.",
    };
  }
}
