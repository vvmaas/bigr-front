import useAsync from '../useAsync';
import useToken from '../useToken';

import * as userApi from '../../services/userApi';

export default function useUser() {
  const token = useToken();
  
  const {
    data: user,
    loading: userLoading,
    error: userError,
    act: getUser
  } = useAsync(() => userApi.getUser(token));

  return {
    user,
    userLoading,
    userError,
    getUser
  };
}
