import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
// import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};
