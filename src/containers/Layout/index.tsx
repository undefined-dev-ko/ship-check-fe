import React from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import Header from '../../components/Header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout>
      <Header />
      {children}
    </DefaultLayout>
  );
}

export default Layout;
