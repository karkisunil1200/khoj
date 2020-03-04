import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 8bf8bfe6f4f48d4bbebcc917e57276cec380d06584cff5afaa199e7bc6d24aa0'
  }
});
