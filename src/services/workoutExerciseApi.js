import api from "./api"

export async function postWorkoutExercise(body, token) {
    const response = await api.post('/workoutexercise', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }