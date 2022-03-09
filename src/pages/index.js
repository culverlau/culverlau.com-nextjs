import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Image from 'next/image'

import PortfolioCase from '../components/PortfolioCase'

import headshotPic from '../../public/images/headshot.jpg'
import jeannottesAppImage from '../../public/images/portfolio/jeannottes_app_bezel.png'
import pokemonImage from '../../public/images/portfolio/pokemon.png'
import creativeMaterialsImage from '../../public/images/portfolio/creative_materials.png'
import fisherVideoImage from '../../public/images/portfolio/fisher_video.png'
import goodBrowImage from '../../public/images/portfolio/good_brow.png'
import jeannottesMarketImage from '../../public/images/portfolio/jeannottes_market.png'
import nashuaChamberImage from '../../public/images/portfolio/nashua_chamber.png'
import nhGirlsHockeyImage from '../../public/images/portfolio/nh_girls_hockey.png'
import bauschPaperImage from '../../public/images/portfolio/bausch_paper.png'
import skinRenewalImage from '../../public/images/portfolio/skin_renewal.png'
import macsImage from '../../public/images/portfolio/macs.png'
import cc3Image from '../../public/images/portfolio/cc3.png'
import nazzyDjsImage from '../../public/images/portfolio/nazzy_djs.png'
import merrimackSmilesImage from '../../public/images/portfolio/merrimack_smiles.png'
import virtuosoMusicImage from '../../public/images/portfolio/virtuoso_music.png'
import recycledMaterialsImage from '../../public/images/portfolio/recycled_materials.png'
import lisaLawImage from '../../public/images/portfolio/lisa_law.png'
import celebrationsCateringImage from '../../public/images/portfolio/celebrations_catering.png'
import pearlMarketingImage from '../../public/images/portfolio/pearl_marketing.png'
import toddsTreeImage from '../../public/images/portfolio/todds_tree.png'
import mmCruisesImage from '../../public/images/portfolio/mm_cruises.png'

const StyledHome = styled.main`
  max-width: 860px;
  margin: 0 auto;
  padding: 0 20px;

  /* color: ${({ theme }) => theme.colors.primary}; */

  .headshot {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    margin: 0 auto;
  }

  .testimonial-block {
    figure {
      background-color: #f9f9f9;
      margin: 26px 14px 30px;
      padding: 20px 10px 16px;
    }
    figcaption {
      text-align: right;
    }
  }

  .portfolio > div {
    margin: 15px 0;
  }
`

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Culver Lau</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <StyledHome>
        <div className='bio'>
          {/* <h1 className='title'>Culver Lau</h1> */}

          <div className='headshot'>
            <Image src={headshotPic} width="300" height="300" alt="Portrait of Culver Lau" />
          </div>

          <p className='description'>
            <b>Culver Lau</b> is a multi-disciplinary front-end developer,
            designer, photographer, brand consultant and entrepreneur based in
            New York City. As the former Director of Website Development at{' '}
            <a href='https://www.pearlmarketing.com/' target='_blank' rel="noreferrer">
              Pearl Marketing
            </a>
            , a boutique digital agency serving Northern New England, Culver was
            a veteran consultant for many regional non-profits and small
            businesses, including the Greater Nashua Chamber of Commerce, United
            Way, and the Boys and Girls Club. As a relentless advocate of UX,
            Culver brings objective-based business strategies to help businesses
            grow and succeed in the digital space.
          </p>
          <p>
            Culver attended the University of California, Santa Barbara (UCSB),
            earning separate degrees in communication studies and biological
            sciences. As a collegiate rower, Culver won championships at the
            national and regional level, and went on to coach at various teams,
            including UCSB, New York Athletic Club (NYAC) and Vanderbilt
            University.
          </p>
          <p>
            In addition to his experience with technology, Culver has extensive
            experience behind the lens. Culver&apos;s first foray in photography
            began as a teenager with his father&apos;s 70s Fujica film camera. Over
            the years, he has sought to capture scenes from across America.
          </p>
        </div>

        <div className='testimonial-block'>
          <figure>
            <blockquote>
              <p>
                Culver was awesome... he was very easy to work with, he was fun
                to work with.
              </p>
              <figcaption>
                —Glynn Bingham,{' '}
                <cite>
                  <a href='https://youtu.be/AENtuwGs-vI' target='_blank' rel="noreferrer">
                    Owner at Jeannottes Market
                  </a>
                </cite>
              </figcaption>
            </blockquote>
          </figure>
        </div>

        <div className='portfolio'>
          <h2>Portfolio</h2>

          <PortfolioCase
            link='https://github.com/PearlMarketing/jeannottes-app'
            title="Jeannotte's Market Mobile App"
            image={jeannottesAppImage}
          >
            <ul>
              <li>React Native (Expo-based)</li>
              <li>Mobx State Tree for state management</li>
              <li>Wordpress REST API through AWS API Gateway</li>
              <li>
                Developed to compliment the{' '}
                <a href='https://www.jeannottesmarket.com/'>
                  Jeannotte&apos;s Market
                </a>{' '}
                website&apos;s online ordering
              </li>
            </ul>
          </PortfolioCase>

          <PortfolioCase
            link='https://pokeguess.com/'
            title='PokeGuess'
            image={pokemonImage}
          >
            <ul>
              <li>Pokemon guessing game in React</li>
            </ul>
          </PortfolioCase>
          <PortfolioCase
            link='https://www.creativematerials.com/'
            title='Creative Materials'
            image={creativeMaterialsImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://www.fishervideoproductions.com/'
            title='Fisher Video Productions'
            image={fisherVideoImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://www.thegoodbrownh.com'
            title='The Good Brow'
            image={goodBrowImage}
          >
            <ul>
              <li>
                React/Gatsby.js, using{' '}
                <a href='https://www.netlifycms.org/'>Netlify CMS</a> (Headless
                CMS)
              </li>
            </ul>
          </PortfolioCase>
          <PortfolioCase
            link='https://www.jeannottesmarket.com/'
            title="Jeannotte's Market"
            image={jeannottesMarketImage}
          >
            <ul>
              <li>
                Online deli ordering system with live in-store POS receipt
                printing
              </li>
              <li>
                <a href='https://github.com/PearlMarketing/jeannottes-app'>
                  Mobile App (React Native, Expo-based)
                </a>{' '}
                for sandwich deli ordering.
              </li>
              <li>
                <a href='https://youtu.be/AENtuwGs-vI'>Client Testimonial</a>
              </li>
            </ul>
          </PortfolioCase>
          <PortfolioCase
            link='https://www.nashuachamber.com/'
            title='Greater Nashua Chamber of Commerce'
            image={nashuaChamberImage}
          >
            <ul>
              <li>
                Chamber of Commerce serving all member businesses in the Nashua
                area.
              </li>
              <li>
                Third-party integration with ChamberMaster (Chamber of Commerce
                management software)
              </li>
            </ul>
          </PortfolioCase>
          <PortfolioCase
            link='https://www.nhgirlshockey.com/'
            title='New Hampshire Girls High School Hockey Invitational'
            image={nhGirlsHockeyImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://www.bauschpaper.com/'
            title='Bausch Articulating Papers'
            image={bauschPaperImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://skinrenewalstudio.com/'
            title='Skin Renewal Studio'
            image={skinRenewalImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://www.macsnh.org/'
            title='MicroSociety Academy Charter School (MACS)'
            image={macsImage}
          >
            <ul>
              <li>
                Custom-built system allowing teachers to manage their own
                classroom pages, while providing website administrators
                authoring tools to approve or reject changes.
              </li>
            </ul>
          </PortfolioCase>
          <PortfolioCase
            link='https://www.cc3entertainment.com/'
            title='CC3 Entertainment Talent Agency'
            image={cc3Image}
          ></PortfolioCase>
          <PortfolioCase
            link='https://nazzydjs.com/'
            title='Nazzy Entertainment DJs'
            image={nazzyDjsImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://www.merrimacksmiles.com/'
            title='Merrimack Smiles'
            image={merrimackSmilesImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://virtuosokids.org/'
            title='Virtuoso Kids Music Academy'
            image={virtuosoMusicImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://www.recycledmaterialsgroup.com/'
            title='Recycled Materials Group'
            image={recycledMaterialsImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://lisalawfengshui.com/'
            title='Lisa Law Feng Shui'
            image={lisaLawImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://celebrationsmenu.com/'
            title='Celebrations Catering'
            image={celebrationsCateringImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://www.pearlmarketing.com/'
            title='Pearl Marketing'
            image={pearlMarketingImage}
          ></PortfolioCase>
          <PortfolioCase
            link='https://www.toddstreeservicenh.com/'
            title="Todd's Tree Service"
            image={toddsTreeImage}
          >
            <ul>
              <li>
                React, using <a href='https://www.storyblok.com'>Storyblok</a>{' '}
                (Headless CMS)
              </li>
            </ul>
          </PortfolioCase>
          <PortfolioCase
            link='https://mandmislandcruisesnh.com/'
            title='M&M Island Cruises'
            image={mmCruisesImage}
          >
            <ul>
              <li>
                React, using <a href='https://www.storyblok.com'>Storyblok</a>{' '}
                (Headless CMS)
              </li>
            </ul>
          </PortfolioCase>
        </div>
      </StyledHome>
    </Layout>
  )
}

export default Home
