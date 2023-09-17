import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as workoutExerciseLogApi from '../../../services/workoutExerciseLogApi';

export default function useGetLog() {
  const token = useToken();
  
  const {
    data: log,
    loading: logLoading,
    error: logError,
    act: getLog
  } = useAsync((id) => workoutExerciseLogApi.getWorkoutExerciseLog(id, token), false);

  return {
    log,
    logLoading,
    logError,
    getLog
  };
}