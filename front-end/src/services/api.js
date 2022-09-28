import axios from 'axios';

const url = axios.create({ baseURL: 'http://localhost:3001' });

async function login(user) {
  let response;
  try {
    response = await url.post('/login', user);
    // url.defaults.headers.Authorization = response.data.token;
  } catch (error) {
    response = error.response;
  }

  return response;
}

async function registerUser(newUser) {
  let response;
  try {
    response = await url.post('/users', newUser);
    // url.defaults.headers.Authorization = response.data.token;
  } catch (error) {
    response = error.response;
  }

  return response;
}

async function getProducts() {
  return url.get('/products'); // precisamos criar um tratamento caso ocorra algum erro de comunicação.
}

async function getAllSellers() {
  return url.get('/users/sellers');
}

async function createOrders(userId, newOrders, token) {
  let response;
  try {
    response = await url.post(`/sales/${userId}`, newOrders, {
      headers: {
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    response = error.response;
  }
  return response;
}

async function getOrderById(id) {
  let response;
  try {
    response = await url.get(`/sales/order/${id}`);
  } catch (error) {
    response = error.response;
  }

  return response;
}

export { login, registerUser, getProducts, getAllSellers, createOrders, getOrderById };

export default url;
