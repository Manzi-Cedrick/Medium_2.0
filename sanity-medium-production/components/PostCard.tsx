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
    <div className='bg-white py-5 max-h-screen gap-4 max-w-screen lg:px-[8em] justify-between grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
     {posts.map((post) => (
        <div key={post._id} className='bg-red-500 rounded-sm max-h-[30vh] max-w-[30vw] '>
        <div className='bg-green max-h-1/2 w-full'>
            <img src={urlFor(post.mainImage).url()!} className='w-full h-full object-cover' alt="" />
        </div>
        <div className='bg-red-500 p-5'>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="flex gap-6 ">
              <img src={urlFor(post.author.image).url()!}className='max-w-12 max-h-10 rounded-full' alt="" />
            <span className='p-4'>{post.author.name}</span>
          </div>
        </div>
    </div>
     ))}
    </div>
  )
}

export default PostCard