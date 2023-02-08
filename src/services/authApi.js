import api from './api';

export async function signIn(email, password) {
  const response = await api.post('/auth/sign-in', { email, password });
  return response.data;
}

export async function logOut(token) {
    const response = await api.post('/auth/log-out', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
  }
//