import axios from 'axios';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const response = await axios.get(`http://127.0.0.1:8000/api/blog/posts/${id}`);
  const blog = response.data;

  return {
    props: { blog },
  };
}

export default function BlogDetail({ blog }) {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}