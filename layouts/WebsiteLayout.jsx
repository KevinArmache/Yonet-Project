import WebsiteFooter from "components/Footers/WebsiteFooter";
import WebsiteNavbar from "components/Navbars/WebsiteNavbar";
import Head from "next/head";
import React from "react";

const WebsiteLayout = ({ title, description, solid,  children }) => {
  return (
    <div>
      <Head>
        <title>{`${title} - Yonet!`}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <WebsiteNavbar solid={solid} />
      <main>{children}</main>
      <WebsiteFooter />
    </div>
  );
};

export default WebsiteLayout;
