import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const styles = {
  containerDiv: ['flex', 'justify-center', 'pt-32'].join(' '),
  registerForm: ['flex', 'flex-col'].join(' '),
  label: 'mb-5',
};

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

    dispatch(register(registerElements));
  };

  return (
    <div className={styles.containerDiv}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <TextField
            id="register-username-input"
            label="Username"
            type="text"
            size="small"
            name="username"
          />
        </label>
        <label className={styles.label}>
          <TextField
            id="register-email-input"
            label="Email"
            type="Email"
            size="small"
            name="email"
          />
        </label>
        <label className={styles.label}>
          <TextField
            id="register-password-input"
            label="Password"
            type="password"
            size="small"
            name="password"
          />
        </label>
        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
    </div>
  );
};
