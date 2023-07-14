import { useSelector } from 'react-redux';
import {
  selectIsRefreshing,
  selectUser,
  selectisLoggedIn,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
};
