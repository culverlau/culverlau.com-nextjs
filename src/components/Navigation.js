import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  gap: 34px;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
        <a
          href='https://www.linkedin.com/in/culverlau/'
          target='_blank' rel="noreferrer"
          // onClick="gtagEvent('Social', 'LinkedIn')"
        >
          LinkedIn
        </a>
        <a
          href='https://www.instagram.com/culversphotos/'
          target='_blank' rel="noreferrer"
          // onClick="gtagEvent('Social', 'Instagram')"
        >
          Instagram
        </a>
        {/* <a href="#0">Web Portfolio</a>
        <a href="#0">Photography</a> */}
    </StyledNavigation>
  );
};

export default Navigation;
