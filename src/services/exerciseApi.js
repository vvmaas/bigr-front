import api from './api';

export async function getExerciseByKeyword(token, keyword) {
  if(keyword == '') keyword = 'novalue';
  const response = await api.get(`/exercise/keyword/${keyword}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}