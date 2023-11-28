import ky from 'ky';

const baseURL = 'https://api.github.com/';

export const fetchUserData = async (username) => {
  try {
    const response = await ky.get(`${baseURL}users/${username}`).json();
    return response;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 404) {
      throw new Error('No results');
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};


