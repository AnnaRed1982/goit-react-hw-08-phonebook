import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Button, TextField, Container } from '@mui/material';

import PropTypes from 'prop-types';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    if (contacts.find(contact => contact.name === name.value)) {
      alert(`${name.value} is already in contacts!`);
      e.currentTarget.reset();
      return;
    }

    const data = { name: name.value, phone: number.value };

    dispatch(addContacts(data));
    e.currentTarget.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          border: '1px solid gray',
          borderRadius: '4px',
          padding: '10px',
          width: '350px',
          marginBottom: '50px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label htmlFor="name">
          <TextField
            type="text"
            label="Name"
            variant="standard"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor="number">
          <TextField
            type="tel"
            label="Number"
            variant="standard"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Container>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.shape()),
};
