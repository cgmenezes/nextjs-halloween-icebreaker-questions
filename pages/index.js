import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({ allQuestions }) {

  let question = "";

  function getRandomQuestion() {
    question = allQuestions.sort(() => Math.random() - Math.random()).slice(0, 1);
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Use this app to generate random icebreaker questions and create new ones.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/">
          <a onClick={getRandomQuestion()}>Get random question</a>
        </Link>
        <ul className={utilStyles.list}>
          {question}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {

  const allQuestions = [
    "What is your earliest memory of Halloween?",
    "Which movie were you too scared to watch as a kid?",
    "What is the best horror movie of all time?",
    "Would you rather be a vampire or a ghost?",
    "Do you prefer chocolate or chips?",
    "What is the best candy in the world?"
  ];

  return {
    props: {
      allQuestions
    }
  }
}
