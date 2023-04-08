import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Paper, Container } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (
      form.elements.email.value === '' ||
      form.elements.password.value === ''
    ) {
      form.reset();
      return alert('Fill in data');
    }

    dispatch(
      logIn({
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
        alignItems: 'center',
        justifyContent: 'center',
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
            Log In
          </Button>
        </Container>
      </form>
    </Paper>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
};
