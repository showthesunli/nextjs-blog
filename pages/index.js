import Head from 'next/head'
import Layout, { siteTitle } from '@/components/layout'
import utilStyles from '@/styles/utils.module.css'
import { getSortedPostsData } from '@/lib/post'
import Link from 'next/link'
import Date from '@/components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>一个简单的人</h2>
        <p>
          这是一个简单的网站，你可以使用我们的
          <a href="https://nextjs.org/learn">Next.js教程</a>来构建一个这样的网站.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>文章</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({id, date, title})=>(
              
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br/>
                <small className={utilStyles.lightText}>
                  <Date dateString={date}/>
                </small>
              </li>
              ))
          }

        </ul>
      </section>
    </Layout>
  )
}