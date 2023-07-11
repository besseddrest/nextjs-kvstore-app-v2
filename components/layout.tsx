import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Header from './header';

const name = 'Harold Cabalic'
export const siteTitle = 'KVStore App v2'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header></Header>
      <main className={styles.container}>
        {!home && (
          <div className={styles.backToHome}>
            <Link className="text-black" href="/">← Back to home</Link>
          </div>
        )}
        {children}
      </main>
    </div>
  )
}