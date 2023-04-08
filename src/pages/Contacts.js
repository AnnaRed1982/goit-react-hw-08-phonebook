import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { Paper } from '@mui/material';

import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet> */}
      <title>Your tasks</title>
      {/* </Helmet> */}
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '20px',
          borderRadius: 'none',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactForm />
        <Filter />
        <ContactList />
      </Paper>
    </>
  );
}
