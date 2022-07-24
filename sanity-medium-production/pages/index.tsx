import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Blog App</title>
        <link rel="icon" href="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" />
      </Head>
      <Header />
      <Hero/>
    </div>
  )
}

export default Home
