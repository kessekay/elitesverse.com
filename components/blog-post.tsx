import React from 'react';
import Link from 'next/link';
import Date from './date';
import BlogCoverImg from './blog-coverImg';

const blogPost = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) => {
  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <BlogCoverImg title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </div>
  )
}

export default blogPost;