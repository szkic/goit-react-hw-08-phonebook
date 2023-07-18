import { LoginForm } from 'components/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </HelmetProvider>
  );
};

export default Login;
