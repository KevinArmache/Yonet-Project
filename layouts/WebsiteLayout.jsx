import WebsiteFooter from 'components/Footers/WebsiteFooter'
import WebsiteNavbar from 'components/Navbars/WebsiteNavbar'
import Head from 'next/head'
import React from 'react'

const WebsiteLayout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Yonet!`}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <WebsiteNavbar />
      <main>
        {children}
      </main>
      <WebsiteFooter />
    </>
  )
}

export default WebsiteLayout