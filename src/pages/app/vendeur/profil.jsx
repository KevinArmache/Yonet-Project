import React from 'react'
import SellerProfileForm from '../../../../components/Forms/SellerProfileForm'
import WebsiteLayout from 'layouts/WebsiteLayout'
import Breadcrumb from '../../../../components/Navbars/Breadcrumb';
import { getSession } from 'next-auth/react';
import axios from 'axios';

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

const ProfilVendeur = () => {
  const saveProfile = async (data) => {
    const res = await axios.post('/api/vendeur/profil', data); 

    console.log(res.data)
  }

  return (
    <WebsiteLayout title="Mon profil vendeur">
      <Breadcrumb />
      <SellerProfileForm
        onSubmit={saveProfile}
        buttonText="Enregistrer"
        redirectPath='/app/vendeur'
      />
    </WebsiteLayout>
  )
}

export default ProfilVendeur