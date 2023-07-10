import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export default function Home({ datasets, setDatasets }: any) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="mb-4">
          This personal project is an improved version (v2.0) of the original KVStore App that I worked on as a Software Engineer at Pinterest from 2020-23.
          Additionally, this proposed version allows me to share it with you on my portfolio/github.
        </p>
        <p>v2.0 contains the following improvements:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>NextJS</li>
          <li>Replace Redux with React Hooks</li>
          <li>Replace Formik with React Hook Form</li>
          <li>TailwindCSS</li>
          <li>Improved Typescript</li>
        </ul>
        <p className="mb-4"><a href="https://github.com/besseddrest/nextjs-kvstore-app-v2" title="KVStore App v2 on Github" rel="noopener" target="_blank">Click here</a> to see the repository on Github.</p>
      </section>
      <section className="flex justify-center">
        <Link className="bg-red-500 hover:bg-red-700 text-white font-bold mx-4 py-2 px-4 rounded" href={`/request`}>Request a Dataset</Link>
        <Link className="bg-red-500 hover:bg-red-700 text-white font-bold mx-4 py-2 px-4 rounded" href={`/queue`}>My Dataset Requests</Link>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}