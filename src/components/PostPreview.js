import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const StyledPostPreview = styled.article`

`

const PostPreview = ({post}) => {
  const fullSlug = "/blog/" + post.slug
  return (
    <StyledPostPreview>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link href={fullSlug}>Read More</Link>
    </StyledPostPreview>
  )
}

export default PostPreview