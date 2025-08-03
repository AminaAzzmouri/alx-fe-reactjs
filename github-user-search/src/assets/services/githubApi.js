// src/services/githubApi.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

const headers = import.meta.env.VITE_GITHUB_API_KEY && import.meta.env.VITE_GITHUB_API_KEY !== 'your_dummy_key'
  ? { Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}` }
  : {};

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};



