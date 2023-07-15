import { LoginForm } from 'components/LoginForm';
import { Helmet } from 'react-helmet';

export const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};
