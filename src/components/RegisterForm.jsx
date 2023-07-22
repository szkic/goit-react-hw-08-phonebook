import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
  containerDiv: ['flex', 'justify-center', 'pt-32'].join(' '),
  registerForm: [
    'flex',
    'flex-col',
    'border-2',
    'p-14',
    'rounded-3xl',
    'shadow-lg',
  ].join(' '),
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

    if (registerElements.name.length < 2) {
      return toast.error('Username must consist of 2 characters', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
