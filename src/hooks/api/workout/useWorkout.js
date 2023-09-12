import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as workoutApi from '../../../services/workoutApi';

export default function useWorkout() {
  const token = useToken();
  
  const {
    data: workout,
    loading: workoutLoading,
    error: workoutError,
    act: getWorkout
  } = useAsync((id) => workoutApi.getWorkoutInfo(id, token), false);

  return {
    workout,
    workoutLoading,
    workoutError,
    getWorkout
  };
}