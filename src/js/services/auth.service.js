import axios from '../plugins/axios';

/**
 * Function login. Make login request to API
 * @param {string} email
 * @param {string} password
 */
export async function login(email, password) {
  try {
    const request = await axios.post(`/auth/login`, JSON.stringify({ email, password }))
    console.log(request);
    return request;
  } catch (err) {
    return Promise.reject(err);
  }
}