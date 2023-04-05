import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import NotFound from './NotFound';

import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contacts from '../pages/Contacts';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

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
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

// <Routes>
//   <Route path="/" element={<Layout />}>
//     <Route index element={<HomePage />} />
//     <Route path="*" element={<NotFound />} />
//     {/* <Route
//       path="/register"
//       element={<Register />}
//       // element={
//       //   <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
//       // }
//     />
//     <Route
//       path="/login"
//       element={<Login />}
//       // element={
//       //   <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
//       // }
//     />
//     <Route
//       path="/contacts"
//       element={<Contacts />}
//       // element={
//       //   <PrivateRoute redirectTo="/login" component={<TasksPage />} />
//       // }
//     /> */}
//   </Route>
// </Routes>
