import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as weightApi from '../../../services/weightApi';

export default function useDeleteWeights() {
  const token = useToken();
  
  const {
    data: deleteWeights,
    loading: deleteWeightsLoading,
    error: deleteWeightsError,
    act: useDeleteWeights
  } = useAsync(() => weightApi.deleteWeight(token));

  return {
    deleteWeights,
    deleteWeightsLoading,
    deleteWeightsError,
    useDeleteWeights
  };
}