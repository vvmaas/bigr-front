import useAsync from '../useAsync';
import useToken from '../useToken';

import * as userApi from '../../services/userApi';

export default function useUpdateUser() {
  const token = useToken();
  
  const {
    data: updateUserData,
    loading: updateUserLoading,
    error: updateUserError,
    act: updateUserAct
  } = useAsync((data) => userApi.updateUser(data, token), false);

  return {
    updateUserData,
    updateUserLoading,
    updateUserError,
    updateUserAct
  };
}
