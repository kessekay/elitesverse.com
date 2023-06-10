import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="relative mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
        <span className="absolute p-1 w-full bg-gradient-to-r from-sky-500 to-indigo-500"></span>
      </div>
      <h3 className="text-3xl mb-3 leading-snug max-lg:text-xl lg:text-xl">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="text-base mb-4">
        <Date dateString={date} />
      </div>
      <div
        className="text-base leading-relaxed mb-4 lg:text-sm"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <Avatar author={author} />
    </div>
  )
}
