import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

const StyledHeader = styled.header`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
`

const Header = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  )
}

export default Header
