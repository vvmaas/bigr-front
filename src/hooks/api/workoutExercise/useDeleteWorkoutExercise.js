import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as workoutExerciseApi from '../../../services/workoutExerciseApi';

export default function useWorkoutExercises() {
  const token = useToken();
  
  const {
    data: workoutExercise,
    loading: workoutExerciseLoading,
    error: workoutExerciseError,
    act: deleteWorkoutExercise
  } = useAsync((id) => workoutExerciseApi.deleteWorkoutExercise(id, token), false);

  return {
    workoutExercise,
    workoutExerciseLoading,
    workoutExerciseError,
    deleteWorkoutExercise
  };
}