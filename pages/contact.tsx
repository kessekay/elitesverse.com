import React from 'react';
import Container from '../components/container';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { SITE_NAME } from '../lib/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

const contact = () => {
  return (
    <>
      <Head>
        <title>{`Contact | ${SITE_NAME}`}</title>
      </Head>
      <Container>
        <div className="grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 mt-8">
          <div className="lg:hidden ">
            <Image src="/contact.jpg" alt="" width={800} height={400} />
          </div>
          <div className="flex-col items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-center">We Love To Hear Your Feedback</h1>
            </div>
            <div className="">
              <h3 className="text-2xl text-center">Email</h3>
              <p className="text-xl md:text-2xl text-center">info@elitesverse.com</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl">Socials</h3>
              <div className="flex flex-wrap gap-2 my-2">
                <Link href="https://web.facebook.com/profile.php?id=100092436578114" className="bg-gradient-to-r from-blue-400 to-blue-500 w-10 h-10 leading-10 text-base text-white text-center hover:text-lg transition-all duration-300"><FontAwesomeIcon icon={faFacebookF} className="text-base" /></Link>
                <Link href="https://instagram.com/elites_verse?igshid=YmMyMTA2M2Y=" className="bg-gradient-to-r from-pink-400 to-purple-500 w-10 h-10 leading-10 text-base text-white text-center hover:text-lg transition-all duration-300"><FontAwesomeIcon icon={faInstagram} className="text-base" /></Link>
                <Link href="https://twitter.com/ElitesVerse?s=09" className="bg-gradient-to-r from-sky-400 to-sky-500 w-10 h-10 leading-10 text-base text-white text-center hover:text-lg transition-all duration-300"><FontAwesomeIcon icon={faTwitter} className="text-base" /></Link>
                <Link href="https://www.youtube.com/@ElitesVerse" className="bg-gradient-to-r from-red-400 to-red-500 w-10 h-10 leading-10 text-base text-white text-center hover:text-lg transition-all duration-300"><FontAwesomeIcon icon={faYoutube} className="text-base" /></Link>
                <Link href="https://www.tiktok.com/@elitesverse?_r=1&_d=e4h5e8hhgbch02&sec_uid=MS4wLjABAAAA8mHlMy-QzgAZ_AFX0wpyOqx8tjceOFWBQfrk2K__vo9BEiKI30xMUL-SRkpaqBT7&share_author_id=7229078158532051974&sharer_language=en&source=h5_m&u_code=dhk935f182af70&timestamp=1683192459&user_id=6944456200563131397&sec_user_id=MS4wLjABAAAAllpB9rxXDLMnmqKZImvc0NdQ2-x9O15Q6m4ZHjD40xE-JM5y_fmkotfPZN5-2fPK&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7197385753932007174&share_link_id=6b48e3ad-4d5b-4951-9ce1-6e2e41f0ba3e&share_app_id=1233&ugbiz_name=Account&ug_btm=b3728%2Cb5836" className="bg-black w-10 h-10 leading-10 text-base text-white text-center hover:text-lg transition-all duration-300"><FontAwesomeIcon icon={faTiktok} className="text-base" /></Link>
              </div>
            </div>
          </div>
          <div className="max-lg:hidden">
            <Image src="/contact.jpg" alt="" width={800} height={400} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default contact;