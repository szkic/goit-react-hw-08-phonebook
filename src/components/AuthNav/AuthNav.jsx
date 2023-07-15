import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={css.link}>
        <Button>Register</Button>
      </NavLink>
      <NavLink to="/login" className={css.link}>
        <Button>Login</Button>
      </NavLink>
    </div>
  );
};
