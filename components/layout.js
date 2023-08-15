import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Samuel Tedechi';
export const siteTitle = 'Simples Blog Next.js'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Aprendendo a contruir um blog com Next.js"
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
          </div>
        )}
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <div className={styles.blackToHome}>
          <Link href='/'>Voltar</Link>
        </div>
      )}
    </div>
  )
}