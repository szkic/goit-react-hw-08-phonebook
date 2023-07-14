import { Button, TextField } from '@mui/material';
import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const registerElements = {
      name: form.elements.username.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    console.log(registerElements);

    dispatch(register(registerElements));
  };

  return (
    <div className={css.registerContainer}>
      <form className={css.registerForm} onSubmit={handleSubmit}>
        <label className={css.label}>
          <TextField
            id="register-username-input"
            label="Username"
            type="text"
            size="small"
            name="username"
          />
        </label>
        <label className={css.label}>
          <TextField
            id="register-email-input"
            label="Email"
            type="Email"
            size="small"
            name="email"
          />
        </label>
        <label className={css.label}>
          <TextField
            id="register-password-input"
            label="Password"
            type="password"
            size="small"
            name="password"
          />
        </label>
        <Button type="submit" variant="contained" className={css.button}>
          Register
        </Button>
      </form>
    </div>
  );
};
