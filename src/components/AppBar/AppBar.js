import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { Container } from '@mui/material';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: 'none',
        backgroundColor: 'gainsboro',
      }}
    >
      <Navigation />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          borderRadius: 'none',
          backgroundColor: 'gainsboro',       
        }}
      >
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Container>
  );
};
