import api from "./api"

export async function postWorkoutExerciseLog(id, body, token) {
    const response = await api.post(`/workoutexercise/log/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }

  export async function getWorkoutExerciseLog(id, token) {
    const response = await api.get(`/workoutexercise/log/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }