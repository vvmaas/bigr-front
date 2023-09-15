import api from "./api"

export async function postWorkoutExercise(body, token) {
    const response = await api.post('/workoutexercise', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }

  export async function getWorkoutExerciseFromWorkout(id, token) {
    const response = await api.get(`/workoutexercise/from/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  export async function deleteWorkoutExercise(id, token) {
    const response = await api.delete(`/workoutexercise/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }