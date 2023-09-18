import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as workoutApi from '../../../services/workoutApi';

export default function useWorkouts() {
  const token = useToken();
  
  const {
    data: workouts,
    loading: workoutsLoading,
    error: workoutsError,
    act: getWorkouts
  } = useAsync(() => workoutApi.getWorkouts(token), false);

  return {
    workouts,
    workoutsLoading,
    workoutsError,
    getWorkouts
  };
}
