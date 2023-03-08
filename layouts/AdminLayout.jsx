import WebsiteFooter from 'components/Footers/WebsiteFooter'
import AdminNavbar from 'components/Navbars/AdminNavbar'
import Head from 'next/head'
import React from 'react'

const AdminLayout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>
          {`${title} - Yonet Administration`}
        </title>
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="min-h-full">
        <AdminNavbar />
        <header className="bg-white shadow pt-16">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg lg:text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <>
              { children }
            </>
          </div>
        </main>
        <WebsiteFooter />
      </div>
    </>
  )
}

export default AdminLayout