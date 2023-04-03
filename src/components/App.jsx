// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import NotFound from './NotFound';

import HomePage from '../pages/HomePage';
// import Login from '../pages/HomePage';
// import Register from '../pages/HomePage';
// import Contacts from '../pages/HomePage';

// import { fetchContacts } from 'redux/auth/operations';
// import { selectIsLoading, selectError } from 'redux/auth/selectors';

// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
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

// <div>
//   <h1>Phonebook</h1>
//   {isLoading && !error && <b>Request in progress...</b>}
//   <ContactForm />
//   <h2>Contacts:</h2>
//   <Filter />
//   <ContactList />
// </div>
