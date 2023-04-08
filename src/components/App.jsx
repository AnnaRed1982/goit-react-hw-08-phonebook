import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import NotFound from './NotFound';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component=<Register /> />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component=<Login /> />
          }
        />

        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/login" component=<Contacts /> />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
