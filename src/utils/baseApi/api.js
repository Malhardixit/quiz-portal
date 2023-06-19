import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your API base URL

// Generic GET request function
export const getApi = (url, params) => axios.get(
  `${BASE_URL}${url}`,
  { params },
)
  .then(response => response.data)
  .catch(error => {
    // Handle error
    console.error('GET Request Error:', error);
    throw error;
  });

// Generic POST request function
export const postApi = (url, data) => axios.post(`${BASE_URL}${url}`, data)
  .then(response => response.data)
  .catch(error => {
    // Handle error
    console.error('POST Request Error:', error);
    throw error;
  });
