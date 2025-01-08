import axios from 'axios';
import { getSession, signIn } from 'next-auth/react';

const API = axios.create({
  baseURL: 'https://www.technologyhax.com/backend/', // Replace with your backend URL
});

// Function to refresh the access token
const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post('https://www.technologyhax.com/backend/accounts/token/refresh/', {
      refresh: refreshToken,
    });
    return response.data.access;
  } catch (error) {
    console.error('Error refreshing access token:', error.response?.data || error.message);
    return null;
  }
};

// Axios interceptor to handle token expiration and refreshing
API.interceptors.request.use(
  async (config) => {
    try {
      let session = await getSession();

      if (session) {
        const { accessToken, refreshToken, accessTokenExpires } = session;

        // Check if the access token has expired
        if (Date.now() > accessTokenExpires) {
          console.log('Access token expired. Attempting to refresh...');
          const newAccessToken = await refreshAccessToken(refreshToken);

          if (newAccessToken) {
            // Update the session (this depends on how your session management is implemented)
            session = {
              ...session,
              accessToken: newAccessToken,
              accessTokenExpires: Date.now() + 300 * 1000, // Extend expiry (adjust based on backend token TTL)
            };

            // Attach the refreshed token
            config.headers.Authorization = `Bearer ${newAccessToken}`;
          } else {
            console.error('Unable to refresh token. Redirecting to login.');
            await signIn(); // Redirect user to sign in
          }
        } else {
          // Attach the current token
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      }
      return config;
    } catch (error) {
      console.error('Error in request interceptor:', error.message);
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to upload a project
export const uploadProject = async (formData) => {
  try {
    return API.post('/electrical/projects/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (error) {
    console.error('Error uploading project:', error.response?.data || error.message);
    throw error; // Propagate the error to the calling code
  }
};

// Function to fetch results for a project
export const fetchResults = async (projectId) => {
  try {
    return API.get(`/electrical/projects/${projectId}/results/`);
  } catch (error) {
    console.error('Error fetching results:', error.response?.data || error.message);
    throw error; // Propagate the error to the calling code
  }
};
