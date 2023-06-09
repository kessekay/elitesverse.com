import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { getAllPostsForHome } from '../lib/api'
import { SITE_NAME } from '../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1, 9)

  return (
    <>
      <Head>
        <title>Home | {SITE_NAME}</title>
      </Head>
      
      <Container>
      <Hero />
        <div>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
        </div>
        <div>
          <div>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
          <div>
          </div>
        </div>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
