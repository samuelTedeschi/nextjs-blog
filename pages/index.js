import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date'
import Link from 'next/link'
import Alert from "../components/alert";


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <section className={utilStyles.sobre}>
        <p>Saldaçao eu me chamo Samuel e sou programador Front-end. Se quiser entrar em contato comigo e so me seguir nas redes sociais acima.</p>
        <p>Seja bem-vindo. No blog eu vou postar diariamente informaçoes sobre tecnologias e produtividade. Tenha uma boa leitura!</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.titlePosts}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={`${utilStyles.listItem} ${utilStyles.listItemPadding}`} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
