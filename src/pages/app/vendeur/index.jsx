import axios from 'axios';
import WebsiteLayout from 'layouts/WebsiteLayout'
import { getSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import SkeletonLoader from '../../../../components/SkeletonLoader';

import Action from '../../../../components/HomePageSections/Action';

export async function getServerSideProps(context) {
  // Check if user is authenticated
  const session = await getSession(context);

  // If not, redirect to the homepage
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  } else {
    return {
      props: {

      }
    }
  }

}

const SellerHome = () => {

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);


  const fetchProfile = async () => {
    setLoading(true);
    const res = await axios.get('/api/vendeur/profil');
    setProfile(res.data);
    setLoading(false);
  }


  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <WebsiteLayout title="Mon compte vendeur">
      {loading ? (
        <SkeletonLoader />
      ) : profile.data == null ? (
        <Action />
      ): (
        <p>Info de votre profil ici</p>
      )}
    </WebsiteLayout>
  )
}

export default SellerHome