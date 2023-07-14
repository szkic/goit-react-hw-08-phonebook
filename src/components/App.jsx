import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { RestrictedRoute } from './RestrictedRoute';
import { Phonebook } from 'pages/Phonebook';
import { PrivateRoute } from './PrivateRoute';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: '1200px', margin: '20px auto' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
