import axios from 'axios';

const url = axios.create({ baseURL: 'http://localhost:3001' });

export async function login(user) {
  let response;
  try {
    response = await url.post('/login', user);
  } catch (error) {
    response = error.response;
  }

  return response;
}

export async function registerUser(newUser) {
  let response;
  try {
    response = await url.post('/users/register', newUser);
  } catch (error) {
    response = error.response;
  }

  return response;
}

export async function getProducts() {
  return url.get('/products'); // precisamos criar um tratamento caso ocorra algum erro de comunicação.
}

export async function getAllSellers() {
  return url.get('/users/sellers');
}

export async function createOrders(userId, newOrders, token) {
  let response;
  try {
    response = await url.post(`/orders/${userId}`, newOrders, {
      headers: {
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    response = error.response;
  }
  return response;
}

export async function getOrderById(id) {
  let response;
  try {
    response = await url.get(`/orders/${id}`);
  } catch (error) {
    response = error.response;
  }

  return response;
}

export async function getOrdersCustomer(id) {
  let response;
  try {
    response = await url.get(`orders/customer/${id}`);
  } catch (error) {
    response = error.response;
  }
  return response;
}

export async function changeOrderStatus(id, payload) {
  let response;
  try {
    response = await url.put(`orders/${id}`, payload);
  } catch (error) {
    response = error.response;
  }
  return response;
}

export async function getUserById(id) {
  let response;
  try {
    response = await url.get(`/users/${id}`);
  } catch (error) {
    response = error.response;
  }

  return response;
}

export async function getOrdersSeller(id) {
  let response;
  try {
    response = await url.get(`/orders/seller/${id}`);
  } catch (error) {
    response = error.response;
  }

  return response;
}

export default url;
