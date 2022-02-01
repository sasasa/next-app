import useSWR from 'swr';
import { useRouter } from "next/router";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function post({ post }) {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${router.query.post}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>POST(投稿){data.id}</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

// export async function getServerSideProps({ params }) {
// export async function getStaticProps({ params }) {
//   const id = params.post;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await res.json();
//   if (!Object.keys(post).length) {
//     return {
//       notFound: true,
//     };
//   }
//   return { props: { post } };
// }

// export async function getStaticPaths() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   const paths = posts.map((post) => `/posts/${post.id}`);
//   return {
//     paths,
//     fallback: false,
//   };
// }