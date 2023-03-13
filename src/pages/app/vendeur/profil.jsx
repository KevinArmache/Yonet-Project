import React from 'react'
import SellerProfileForm from '../../../../components/Forms/SellerProfileForm'
import WebsiteLayout from 'layouts/WebsiteLayout'
import Breadcrumb from '../../../../components/Navbars/Breadcrumb';

const ProfilVendeur = () => {
  const saveProfile = (data) => console.log(data); 

  return (
    <WebsiteLayout title="Mon profil vendeur">
      <Breadcrumb />
      <SellerProfileForm
        onSubmit={saveProfile}
        buttonText="Enregistrer"
      />
    </WebsiteLayout>
  )
}

export default ProfilVendeur