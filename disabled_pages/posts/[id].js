const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts/').then(
    (res) => res.json()
  );

  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json());

  return { props: { post } };
};

export default Post;
