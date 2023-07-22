import { getPostSlugs, getPostBySlug, getAllPosts } from "../src/lib/api";

describe('Blog', () => {
  it('fetches post slugs', () => {
    expect(getPostSlugs()).toEqual(['first-post.md'])
  })
})