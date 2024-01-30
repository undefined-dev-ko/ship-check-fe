import React from 'react';
import styled from 'styled-components';

const DefaultLayoutWrapper = styled.div``;

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DefaultLayoutWrapper>{children}</DefaultLayoutWrapper>
    </>
  );
}

export default DefaultLayout;
