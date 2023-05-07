import React from 'react'
import BlogPost from '../components/blog-post';

const allPosts = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            {posts.map(({ node }) => (
              <BlogPost
                key={node.slug}
                title={node.title}
                coverImage={node.featuredImage}
                date={node.date}
                slug={node.slug}
                excerpt={node.excerpt}
              />
            ))}
          </div>
  )
}

export default allPosts