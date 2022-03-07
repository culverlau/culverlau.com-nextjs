const Blog = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts/').then(
    (res) => res.json()
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
