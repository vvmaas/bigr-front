import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as weightApi from '../../../services/weightApi';

export default function useWeights() {
  const token = useToken();
  
  const {
    data: weights,
    loading: weightsLoading,
    error: weightsError,
    act: getWeights
  } = useAsync(() => weightApi.getWeights(token));

  return {
    weights,
    weightsLoading,
    weightsError,
    getWeights
  };
}