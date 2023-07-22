import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { getAllPosts } from '../../lib/api'
import PostPreview from '../../components/PostPreview'

const StyledBlog = styled.main``

const Blog = ({ allPosts }) => {
  return (
    <Layout>
      <Head>
        <title>Culver Lau</title>
      </Head>
      <StyledBlog>
        {allPosts.map((post) => {
          return <PostPreview post={post} key={post.slug} />
        })}
      </StyledBlog>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt'])

  return {
    props: {
      allPosts,
    },
  }
}
