import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
})

const StyledPortfolioCase = styled.div`
  .background {
  }

  .content {
    .title {
      font-weight: 700;
    }
    li {
      margin: 5px 0;
    }
  }

  .__react_component_tooltip.show {
    opacity: 1;
    margin: 0;
    padding: 0;
    &::before, &::after {
      display: none;
    }
  }
  .tooltip {
    max-width: 500px;
  }
`

const PortfolioCase = ({ image, title, link, children }) => {
  const hoverId = title.replace(/[^a-z0-9]/gi, '')
  return (
    <StyledPortfolioCase>
      {/* {image && (
          <div className='background'>
            <Image src={image} />
          </div>
        )} */}
      <div className='content'>
        <a href={link} target='_blank' rel="noreferrer" data-tip data-for={hoverId}>
          <span className='title'>{title}</span>
        </a>
        <div>{children}</div>
      </div>
      {image && (
        <ReactTooltip
          id={hoverId}
          place='right'
          backgroundColor='none'
          arrowColor='none'
          effect='float'
        >
          <div className='tooltip'>
            <Image src={image} alt={title} width='960' height='679' placeholder="blur" />
          </div>
        </ReactTooltip>
      )}
    </StyledPortfolioCase>
  )
}

export default PortfolioCase
