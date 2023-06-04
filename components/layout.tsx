import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
import Nav from './nav';
import Script from 'next/script';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5691070158347053"
      crossOrigin="anonymous" />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-088SCNDHYX" />
      
      <Nav />
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
      <Footer />
    </>
  )
}
