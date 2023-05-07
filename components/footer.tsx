import Container from './container'
import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EXAMPLE_PATH } from '../lib/constants'
import { faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
      <div className="p-3 w-full bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      <footer className="bg-accent-1 border-accent-2 bottom-0 py-10 border-t">
        <Container>
          <div className="flex flex-col items-center text-base font-semibold">
            <div className="flex gap-1 items-center font-semibold mb-2">
              <span className="font-semibold">
                <Image src="/logo.png" alt='logo' width={30} height={30}/>
              </span>
              <p className="text-lg">ElitesVerse</p>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              <Link href="https://web.facebook.com/profile.php?id=100092436578114" className="border border-black w-10 h-10 leading-10 text-base text-center hover:text-lg transition-all duration-300"><FontAwesomeIcon icon={faFacebookF} className="text-base" /></Link>
              <Link href="https://instagram.com/elites_verse?igshid=YmMyMTA2M2Y=" className="border border-black w-10 h-10 leading-10 text-base text-center hover:text-lg transition-all duration-300"><FontAwesomeIcon icon={faInstagram} className="text-base" /></Link>
              <Link href="https://twitter.com/ElitesVerse?s=09" className="border border-black w-10 h-10 leading-10 text-base text-center hover:text-lg transition-all duration-300"><FontAwesomeIcon icon={faTwitter} className="text-base" /></Link>
              <Link href="https://www.youtube.com/@ElitesVerse" className="border border-black w-10 h-10 leading-10 text-base text-center hover:text-lg transition-all duration-300"><FontAwesomeIcon icon={faYoutube} className="text-base" /></Link>
              <Link href="https://www.tiktok.com/@elitesverse?_r=1&_d=e4h5e8hhgbch02&sec_uid=MS4wLjABAAAA8mHlMy-QzgAZ_AFX0wpyOqx8tjceOFWBQfrk2K__vo9BEiKI30xMUL-SRkpaqBT7&share_author_id=7229078158532051974&sharer_language=en&source=h5_m&u_code=dhk935f182af70&timestamp=1683192459&user_id=6944456200563131397&sec_user_id=MS4wLjABAAAAllpB9rxXDLMnmqKZImvc0NdQ2-x9O15Q6m4ZHjD40xE-JM5y_fmkotfPZN5-2fPK&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7197385753932007174&share_link_id=6b48e3ad-4d5b-4951-9ce1-6e2e41f0ba3e&share_app_id=1233&ugbiz_name=Account&ug_btm=b3728%2Cb5836" className="border border-black w-10 h-10 leading-10 text-base text-center hover:text-lg transition-all duration-300"><FontAwesomeIcon icon={faTiktok} className="text-base" /></Link>
            </div>
            <p className="text-base">All rights reserved &copy; 2023 ElitesVerse&#174;</p>
          </div>
        </Container>
      </footer>
    </>
  )
}
