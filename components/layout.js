import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

import Voltar from './voltar';
import Redes from './redes';

const name = 'Samuel Tedechi';
export const siteTitle = 'Samuel Tedeschi Blog'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Noticias e conteudos sobre tecnologias"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <div>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={148}
              width={148}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <Redes/>
          </div>
        ) : (
          <div>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/' className={utilStyles.colorInherit}>{name}</Link>
            </h2>
            <Redes/>
          </div>
        )}
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <Voltar/>
      )}
    </div>
  )
}