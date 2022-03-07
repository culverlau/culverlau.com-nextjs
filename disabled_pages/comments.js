const Comments = ({ data }) => {
  return (
    <div>
      {data.map((comment) => (
        <p><strong>Comment:</strong> {comment.body}</p>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/comments'
  ).then((res) => res.json());

  return { props: { data } };
};

export default Comments;
