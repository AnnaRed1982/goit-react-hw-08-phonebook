import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { Container, Button, Typography } from '@mui/material';

import PropTypes from 'prop-types';


export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <Container
      sx={{
        display: 'flex',
        borderRadius: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <Typography sx={{fontWeight: "700"}}>{name}:</Typography>
      <Typography>{number}</Typography>

      <Button
        variant="contained"
        sx={{
          padding: '0px',
        }}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </Container>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
