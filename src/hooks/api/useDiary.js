import useAsync from '../useAsync';
import useToken from '../useToken';

import * as diaryApi from '../../services/diaryApi';

export default function useDiary() {
  const token = useToken();
  
  const {
    data: diary,
    loading: diaryLoading,
    error: diaryError,
    act: getDiary
  } = useAsync(() => diaryApi.getDiary(token));

  return {
    diary,
    diaryLoading,
    diaryError,
    getDiary
  };
}
