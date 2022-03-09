import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledLayout = styled.div`
  padding: 0px 0 50px;

  footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer img {
    margin-left: 0.5rem;
  }

  footer a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <Navigation />
        {children}
      </StyledLayout>
    </>
  );
};

export default Layout;
