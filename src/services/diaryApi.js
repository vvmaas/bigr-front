import api from './api';

export async function getDiary(token) {
  const response = await api.get('/diary', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postDiaryLog(body, token) {
  const response = await api.post('/diary', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteDiaryLog(id, token) {
  const response = await api.delete(`/diary/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}