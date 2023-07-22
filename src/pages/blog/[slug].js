import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import markdownToHtml from '../../lib/markdownToHtml'
import { getAllPosts, getPostBySlug } from '../../lib/api'

const StyledPost = styled.main``

const Post = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Head>
        <title>Culver Lau</title>
      </Head>
      <StyledPost>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </StyledPost>
    </Layout>
  )
}

export default Post

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
