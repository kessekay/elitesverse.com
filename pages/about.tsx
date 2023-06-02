import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SITE_NAME } from '../lib/constants';
import Container from '../components/container';

const about = () => {
  return (
    <>
      <Head>
        <title>{`About | ${SITE_NAME}`}</title>
      </Head>
      <Container>
        <div className="grid grid-cols-2 items-center gap-8 max-lg:grid-cols-1 mb-4 mt-12">
          <div className="">
            <Image src="/about.jpg" alt="" width={800} height={400} />
          </div>
          <div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight">About Us</h1>
            <div className="flex flex-col gap-4 text-base md:text-lg">
              <p className="">
                Welcome to ElitesVerse! We are a platform committed to providing you with the most recent 
                news and updates on a variety of topics such as entertainment, sports, education, and others.
                Our purpose is to offer readers with a platform where they can stay informed and connected with 
                the world around them. Our writers and contributors are dedicated to producing high-quality 
                content that is both useful and entertaining. We attempt to deliver a varied spectrum of opinions 
                on the subjects that matter most, from breaking news to in-depth stories. Our blog has something 
                for everyone, whether you're looking for the latest celebrity gossip or want to stay up to date 
                on global and local events.
              </p>
              <p className="">
                On our blog, you'll find helpful hints, industry news, and motivation to keep you up to 
                date on the newest trends and best practices in various professions and skills. We cover all areas 
                of content creation to help you benefit in today's digital landscape.
              </p>
              <p className="">
                Thank you for joining us on this journey, and we hope you enjoy reading our content as much 
                as we enjoy creating it.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default about;