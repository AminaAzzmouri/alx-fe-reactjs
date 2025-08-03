import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  const headers = import.meta.env.VITE_GITHUB_API_KEY &&
    import.meta.env.VITE_GITHUB_API_KEY !== 'your_dummy_key'
      ? { Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}` }
      : {};

  try {
    const response = await axios.get(`${BASE_URL}/${username}`, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};
