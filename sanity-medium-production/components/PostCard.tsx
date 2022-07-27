import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../types'
type Props = {
  posts: Post[],
}
const PostCard:React.FC=({posts} : Props) => {
  // console.log("Post Card Data",posts)
  return (
    <div className='bg-white max-h-screen gap-4 max-w-screen lg:px-[8em] justify-between grid grid-cols-4'>
     {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.
        current}`} className='bg-red max-h-[30vh] max-w-[30vw] '>
        <div className='bg-green max-h-1/2 w-full'>
            <img src={urlFor(post.mainImage).url()!} className='w-full h-full object-cover' alt="" />
        </div>
        <div className='bg-white p-5'>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="flex gap-6 ">
              <img src={urlFor(post.author.image).url()!}className='max-w-24 max-h-24 rounded-full' alt="" />
            <span className='p-4'>{post.author.name}</span>
          </div>
        </div>
    </Link>
     ))}
    </div>
  )
}

export default PostCard