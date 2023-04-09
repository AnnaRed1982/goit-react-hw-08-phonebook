import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, TextField, Paper, Container } from '@mui/material';

import PropTypes from 'prop-types';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (
      form.elements.name.value === '' ||
      form.elements.email.value === '' ||
      form.elements.password.value === ''
    ) {
      form.reset();
      return alert('Fill in data');
    }

    if (form.elements.password.value.length < 7) {
      form.elements.password.value = '';
      return alert('Password shoold be more than 7 symbols');
    }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        borderRadius: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '200px',
        paddingBottom: '200px',
      }}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            border: '1px solid gray',
            borderRadius: '4px',
            padding: '10px',
            width: '350px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <label>
            <TextField
              label="Username"
              variant="standard"
              type="text"
              name="name"
            />
          </label>
          <label>
            <TextField
              label="Email"
              variant="standard"
              type="email"
              name="email"
            />
          </label>
          <label>
            <TextField
              label="Password"
              variant="standard"
              type="password"
              name="password"
            />
          </label>
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Container>
      </form>
    </Paper>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
};
