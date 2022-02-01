import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Layout from '../components/layout';

const products = [{ name: "bag" }, { name: "shoes" }, { name: "socks" }];
export default function Home() {
  return (
    <div>
      <Head>
        <title>トップページ</title>
        <meta name="description" content="これはトップページです" />
        <meta property="og:title" content="トップページ" />
        <meta property="og:description" content="これはトップページ" />
      </Head>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.name}>
              <Link href={`/products/${product.name}`} >
                <a>{product.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      {console.log(process.env.API_KEY)}
      <h1 className={styles.heading}>Hello Next.js</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
};