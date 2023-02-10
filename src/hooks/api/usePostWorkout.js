import useAsync from '../useAsync';
import useToken from '../useToken';

import * as workoutApi from '../../services/workoutApi';

export default function usePostWorkout() {
  const token = useToken();
  
  const {
    data: postWorkoutData,
    loading: postWorkoutLoading,
    error: postWorkoutError,
    act: postWorkoutAct
  } = useAsync((data) => workoutApi.postWorkout(data, token), false);

  return {
    postWorkoutData,
    postWorkoutLoading,
    postWorkoutError,
    postWorkoutAct
  };
}