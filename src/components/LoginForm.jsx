import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const styles = {
  containerDiv: ['flex', 'justify-center', 'mt-28'].join(' '),
  loginForm: [
    'flex',
    'flex-col',
    'border-2',
    'p-14',
    'rounded-3xl',
    'shadow-lg',
  ].join(' '),
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
          <TextField
            id="login-email-input"
            label="Email"
            type="Email"
            size="small"
            name="email"
          />
        </label>
        <label className={styles.label}>
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
