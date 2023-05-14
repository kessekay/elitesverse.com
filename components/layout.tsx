import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
import Nav from './nav';
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5691070158347053"
        crossOrigin="anonymous"></script>
      </Head>
      <Nav />
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
      <Footer />
    </>
  )
}
