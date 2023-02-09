import api from './api';

export async function signUp(email, password) {
  const response = await api.post('/users', { email, password });
  return response.data;
}

export async function getUser(token) {
  const response = await api.get('/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateUser(token, id, body) {
  const response = await api.put(`/users/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
