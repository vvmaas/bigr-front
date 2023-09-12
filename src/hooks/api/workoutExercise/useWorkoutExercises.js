import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as workoutExerciseApi from '../../../services/workoutExerciseApi';

export default function useWorkoutExercises() {
  const token = useToken();
  
  const {
    data: workoutExercises,
    loading: workoutExerciseLoading,
    error: workoutExerciseError,
    act: getWorkoutExercise
  } = useAsync((id) => workoutExerciseApi.getWorkoutExerciseFromWorkout(id, token));

  return {
    workoutExercises,
    workoutExerciseLoading,
    workoutExerciseError,
    getWorkoutExercise
  };
}