import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next'
import { getAllPostsForHome } from '../lib/api'
import { SITE_NAME } from '../lib/constants';
import Container from '../components/container';
import AllPosts from '../components/all-posts';

const blog = ({ allPosts: { edges }, preview }) => {
  const morePosts = edges.slice(0)
  return (
    <>
      <Head>
        <title>{`Blog | ${SITE_NAME}`}</title>
      </Head>
      <Container>
        <div>
          <div className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight mb-4 mt-8">Recent</div>
          {morePosts.length > 0 && <AllPosts posts={morePosts} />}
        </div>
      </Container>
    </>
  )
}

export default blog;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}