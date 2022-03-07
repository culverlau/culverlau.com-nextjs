import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from './Navigation';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
    line-height: 1.2rem;
    ${'' /* font-family: '-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; */}
    font-family: 'Work Sans', sans-serif;
  }
  ul {
    margin: 0;
  }
`;

const StyledLayout = styled.div`
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
      <GlobalStyle />
      <StyledLayout>
        <Navigation />
        {children}
      </StyledLayout>
    </>
  );
};

export default Layout;
