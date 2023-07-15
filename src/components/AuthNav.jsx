import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className="p-4">
        <Button>Register</Button>
      </NavLink>
      <NavLink to="/login" className="p-4">
        <Button>Login</Button>
      </NavLink>
    </div>
  );
};
