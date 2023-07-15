import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const styles = {
  containerDiv: ['flex', 'justify-center', 'pt-32'].join(' '),
  loginForm: ['flex', 'flex-col'].join(' '),
  label: 'mb-5',
};

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
    <div className={styles.containerDiv}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label className={styles.label}>
          {/* Email */}
          <TextField
            id="login-email-input"
            label="Email"
            type="Email"
            size="small"
            name="email"
          />
        </label>
        <label className={styles.label}>
          {/* Password */}
          <TextField
            id="login-password-input"
            label="Password"
            type="password"
            size="small"
            name="password"
          />
        </label>
        <Button type="submit" variant="contained">
          Log In
        </Button>
      </form>
    </div>
  );
};
