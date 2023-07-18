import { RegisterForm } from 'components/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Register = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </HelmetProvider>
  );
};

export default Register;
