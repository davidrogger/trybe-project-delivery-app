import axios from 'axios';

const url = axios.create({ baseURL: 'http://localhost:3001' });

export async function login(user) {
  return url
    .post('/login', user)
    .then((response) => response)
    .catch(console.error);
}

export async function registerUser(newUser) {
  return url
    .post('/users/register', newUser)
    .then((response) => response)
    .catch(console.error);
}

export async function registerByAdmin(newUser, token) {
  let response;
  try {
    response = await url.post('/users/admin/register', newUser, {
      headers: {
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    response = error.response;
  }
  return response;
}

export async function getAllUsers(token) {
  let response;
  try {
    response = await url.get('/users/admin', {
      headers: {
        Authorization: `${token}`,
      },
    });
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

export async function createOrder(userId, newOrders, token) {
  let response;
  try {
    response = await url.post(`/orders/user/${userId}`, newOrders, {
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
