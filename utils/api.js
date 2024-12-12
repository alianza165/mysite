import axios from 'axios';
import { getSession, signIn } from 'next-auth/react';

const API = axios.create({
  baseURL: 'http://3.226.46.93:8000/', // Replace with your backend URL
});

// Function to refresh the access token
const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post('http://3.226.46.93:8000/accounts/token/refresh/', {
      refresh: refreshToken,
    });
    return response.data.access;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return null;
  }
};

// Axios interceptor to handle token expiration and refreshing
API.interceptors.request.use(
  async (config) => {
    let session = await getSession();
    if (session) {
      const { accessToken, refreshToken, accessTokenExpires } = session;

      // Check if the access token has expired
      if (Date.now() > accessTokenExpires) {
        const newAccessToken = await refreshAccessToken(refreshToken);
        if (newAccessToken) {
          // Update the session and use the new token
          session = {
            ...session,
            accessToken: newAccessToken,
            accessTokenExpires: Date.now() + 300 * 1000, // Set new expiry time
          };
        } else {
          console.error('Unable to refresh token, redirecting to login.');
          await signIn(); // Redirect user to sign in
        }
      }

      // Attach the valid (or refreshed) token to the request
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const uploadProject = async (formData) => {
  return API.post('/electrical/projects/', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const fetchResults = async (projectId) => {
  return API.get(`/electrical/projects/${projectId}/results/`);
};
