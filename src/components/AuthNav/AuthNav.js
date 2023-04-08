import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

import { IconButton, Container } from '@mui/material';

export const AuthNav = () => {
  return (
    <div>
      <Container
        sx={{
          display: 'flex',  
          borderRadius: 'none',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <IconButton>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.link)}
            to="/register"
          >
            Register
          </NavLink>
        </IconButton>
        <IconButton>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.link)}
            to="/login"
          >
            LogIn
          </NavLink>
        </IconButton>
      </Container>
    </div>
  );
};
