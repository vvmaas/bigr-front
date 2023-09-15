import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as workoutExerciseApi from '../../../services/workoutExerciseApi';

export default function usePostWorkoutExercise() {
  const token = useToken();
  
  const {
    data: postWorkoutExerciseData,
    loading: postWorkoutExerciseLoading,
    error: postWorkoutExerciseError,
    act: postWorkoutExerciseAct
  } = useAsync((data) => workoutExerciseApi.postWorkoutExercise(data, token), false);

  return {
    postWorkoutExerciseData,
    postWorkoutExerciseLoading,
    postWorkoutExerciseError,
    postWorkoutExerciseAct
  };
}