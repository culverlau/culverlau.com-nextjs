import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 34px;
`

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link
        href='/'
        // onClick="gtagEvent('Social', 'Instagram')"
      >
        <a>Bio</a>
      </Link>
      {process.env.NODE_ENV === 'development' && (
        <Link
          href='/blog'
          // onClick="gtagEvent('Social', 'Instagram')"
        >
          <a>Blog</a>
        </Link>
      )}
      <a
        href='https://www.linkedin.com/in/culverlau/'
        target='_blank'
        rel='noreferrer'
        // onClick="gtagEvent('Social', 'LinkedIn')"
      >
        LinkedIn
      </a>
      <a
        href='https://www.instagram.com/culversphotos/'
        target='_blank'
        rel='noreferrer'
        // onClick="gtagEvent('Social', 'Instagram')"
      >
        Instagram
      </a>
      {/* <a href="#0">Web Portfolio</a>
        <a href="#0">Photography</a> */}
    </StyledNavigation>
  )
}

export default Navigation
