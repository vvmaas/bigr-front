import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as weightApi from '../../../services/weightApi';

export default function usePostWeights() {
  const token = useToken();
  
  const {
    data: postWeights,
    loading: postWeightsLoading,
    error: postWeightsError,
    act: usePostWeights
  } = useAsync(() => weightApi.postWeight(token));

  return {
    postWeights,
    postWeightsLoading,
    postWeightsError,
    usePostWeights
  };
}