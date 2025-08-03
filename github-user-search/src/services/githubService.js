import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const headers = import.meta.env.VITE_GITHUB_API_KEY &&
  import.meta.env.VITE_GITHUB_API_KEY !== 'your_dummy_key'
    ? { Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}` }
    : {};

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// New function to support advanced search
export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = '';

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  query = query.trim();

  const url = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`;

  try {
    const response = await axios.get(url, { headers });
    return response.data; // { total_count, items: [] }
  } catch (error) {
    throw error;
  }
};
