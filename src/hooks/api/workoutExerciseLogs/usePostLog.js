import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as workoutExerciseLogApi from '../../../services/workoutExerciseLogApi';

export default function usePostLog() {
  const token = useToken();
  
  const {
    data: logPost,
    loading: logPostLoading,
    error: logPostError,
    act: postLog
  } = useAsync((id, body) => workoutExerciseLogApi.postWorkoutExerciseLog(id, body, token), false);

  return {
    logPost,
    logPostLoading,
    logPostError,
    postLog
  };
}