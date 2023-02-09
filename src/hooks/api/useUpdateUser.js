import useAsync from '../useAsync';
import useToken from '../useToken';
import useUser from './useUser';

import * as userApi from '../../services/userApi';

export default function useUpdateUser(body) {
  const token = useToken();
  const user = useUser();
  
  const {
    data: updateUser,
    loading: updateUserLoading,
    error: updateUserError,
    act: getUpdateUser
  } = useAsync(() => userApi.updateUser(token, user.id, body));

  return {
    updateUser,
    updateUserLoading,
    updateUserError,
    getUpdateUser
  };
}
