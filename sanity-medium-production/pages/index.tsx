import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import {sanityClient } from '../sanity'
import {Post} from '../types'
interface Props{ 
  posts : [Post]
}
const Home:NextPage = ({posts} : Props) => {
  console.log("The Props are : ",posts)
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
export const getServerSideProps = async () =>{
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`
  const posts = await sanityClient.fetch(query)
  return {
    props : {
      posts,
    }
  }
}
export default Home
