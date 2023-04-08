import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

import { IconButton, Container } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container
      sx={{
        display: 'flex',
        borderRadius: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0',
      }}
    >
      <IconButton>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.link)}
          to="/"
        >
          Home
        </NavLink>
      </IconButton>
      {isLoggedIn && (
        <IconButton>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.link)}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </IconButton>
      )}
    </Container>
  );
};
