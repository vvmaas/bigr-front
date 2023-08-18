import api from './api';

export async function getWorkouts(token) {
  const response = await api.get('/workout', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getWorkoutInfo(id, token) {
    const response = await api.get(`/workout/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

export async function postWorkout(body, token) {
  const response = await api.post('/workout', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteWorkout(id, token) {
  const response = await api.delete(`/workout/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateWorkouts(id, body, token) {
    const response = await api.put(`/workout/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }