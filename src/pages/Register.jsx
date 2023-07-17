import { RegisterForm } from 'components/RegisterForm';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Register;
