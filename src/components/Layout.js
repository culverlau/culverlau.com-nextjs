import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const StyledLayout = styled.div`
  padding: 0px 0 50px;

  main {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 20px;
  }

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
`

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <Header />
        {children}
      </StyledLayout>
    </>
  )
}

export default Layout
