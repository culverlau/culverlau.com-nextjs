import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const StyledPortfolio = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    
  }, [])

  return (
    <Layout>
      <Head>
        <title>Culver Lau</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <StyledPortfolio>
        <h1 className='title'>Portfolio</h1>

        <p className='description'>
          <b>Culver Lau</b> is a multi-disciplinary front-end developer,
          designer, photographer, brand consultant and entrepreneur based in New
          York City. As the former Director of Website Development at{' '}
          <a href='https://www.pearlmarketing.com/' target='_blank'>
            Pearl Marketing
          </a>
          , a boutique digital agency serving Northern New England, Culver was a
          veteran consultant for many regional non-profits and small businesses,
          including the Greater Nashua Chamber of Commerce, United Way, and the
          Boys and Girls Club. As a relentless advocate of UX, Culver brings
          objective-based business strategies to help businesses grow and
          succeed in the digital space.
        </p>

        <div className='grid'>
          <a href='https://nextjs.org/docs' className='card'>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className='card'>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className='card'
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='card'
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </StyledPortfolio>
    </Layout>
  );
};

export default Portfolio;
