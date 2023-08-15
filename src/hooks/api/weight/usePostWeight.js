import useAsync from '../../useAsync';
import useToken from '../../useToken';

import * as weightApi from '../../../services/weightApi';

export default function usePostWeights() {
  const token = useToken();
  
  const {
    data: postWeightsData,
    loading: postWeightsLoading,
    error: postWeightsError,
    act: postWeights
  } = useAsync((data) => weightApi.postWeight(data, token), false);

  return {
    postWeights,
    postWeightsLoading,
    postWeightsError,
    postWeightsData
  };
}