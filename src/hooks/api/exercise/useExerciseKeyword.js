import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as exerciseApi from '../../../services/exerciseApi';

export default function useExercisesByKeyword() {
  const token = useToken();
  
  const {
    data: exercise,
    loading: exerciseLoading,
    error: exerciseError,
    act: getExercise
  } = useAsync((keyword) => exerciseApi.getExerciseByKeyword(token, keyword), false);

  return {
    exercise,
    exerciseLoading,
    exerciseError,
    getExercise
  };
}