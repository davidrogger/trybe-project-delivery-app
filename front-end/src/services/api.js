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
    response = await url.post('/users', newUser);
  } catch (error) {
    response = error.response;
  }

  return response;
}

export async function getProducts() {
  return url.get('/products'); // precisamos criar um tratamento caso ocorra algum erro de comunicação.
}
