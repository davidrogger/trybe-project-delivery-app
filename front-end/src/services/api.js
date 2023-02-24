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
  return url
    .post('/users/admin/register', newUser, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => response)
    .catch(console.error);
}

export async function getAllUsers(token) {
  return url
    .get('/users', {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => response)
    .catch(console.error);
}

export async function deleteUsersById(userId, token) {
  return url
    .delete(`/users/${userId}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => response)
    .catch(console.error);
}

export async function getProducts() {
  return url.get('/products'); // precisamos criar um tratamento caso ocorra algum erro de comunicação.
}

export async function getAllSellers() {
  return url.get('/users/sellers');
}

export async function createOrder(userId, newOrders, token) {
  return url
    .post(`/orders/user/${userId}`, newOrders, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => response)
    .catch(console.error);
}

export async function getOrderById(id) {
  return url
    .get(`/orders/${id}`)
    .then((response) => response)
    .catch(console.error);
}

export async function getOrdersCustomer(id) {
  return url
    .get(`orders/customer/${id}`)
    .then((response) => response)
    .catch(console.error);
}

export async function changeOrderStatus(id, payload) {
  return url
    .put(`orders/${id}`, payload)
    .then((response) => response)
    .catch(console.error);
}

export async function getUserById(id) {
  return url
    .get(`/users/${id}`)
    .then((response) => response)
    .catch(console.error);
}

export async function getOrdersSeller(id) {
  return url
    .get(`/orders/seller/${id}`)
    .then((response) => response)
    .catch(console.error);
}

export default url;
