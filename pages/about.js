import Layout2 from '../components/layout2';

export default function About() {
  return <h1>About Page</h1>
}

About.getLayout = function getLayout(page) {
  return <Layout2>{page}</Layout2>
};