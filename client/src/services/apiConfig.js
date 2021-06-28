import axios from 'axios';

const getToken = () => {
  return new Promise(resolve => {
    resolve(`Bearer ${localStorage.getItem('token') || null}`);
  });
};

const api = axios.create({
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://pc-Culture.herokuapp.com/api'
      : 'http://localhost:3000/api',
});

api.interceptors.request.use(
  async function (config) {
    config.headers['Authorization'] = await getToken();
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
