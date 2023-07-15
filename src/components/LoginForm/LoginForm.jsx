import { Button, TextField } from '@mui/material';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const loginElements = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(loginElements));
  };
  return (
    <div className={css.loginContainer}>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <label className={css.label}>
          {/* Email */}
          <TextField
            id="login-email-input"
            label="Email"
            type="Email"
            size="small"
            name="email"
          />
        </label>
        <label className={css.label}>
          {/* Password */}
          <TextField
            id="login-password-input"
            label="Password"
            type="password"
            size="small"
            name="password"
          />
        </label>
        <Button type="submit" variant="contained" className={css.button}>
          Log In
        </Button>
      </form>
    </div>
  );
};
