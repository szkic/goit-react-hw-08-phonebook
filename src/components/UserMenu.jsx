import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <Button type="button" onClick={() => dispatch(logout())}>
      Logout
    </Button>
  );
};
