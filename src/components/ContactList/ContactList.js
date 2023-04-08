import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/contacts/selectors';
import { Container } from '@mui/material';

import PropTypes from 'prop-types';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      <Container
        sx={{
          display: 'flex',
          flexDirection: "column",
          borderRadius: 'none',
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        {getVisibleContacts().map(({ id, name, number }) => {
          return (
            <li key={id}>
              <ContactItem id={id} name={name} number={number} />
            </li>
          );
        })}
      </Container>
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
