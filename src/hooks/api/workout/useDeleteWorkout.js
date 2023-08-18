import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as workoutApi from '../../../services/workoutApi';

export default function useDeleteWorkout() {
  const token = useToken();
  const {
    data: deleteWorkoutData,
    loading: deleteWorkoutLoading,
    error: deleteWorkoutError,
    act: deleteWorkoutAct
  } = useAsync((id) => workoutApi.deleteWorkout(id, token), false);

  return {
    deleteWorkoutData,
    deleteWorkoutLoading,
    deleteWorkoutError,
    deleteWorkoutAct
  };
}