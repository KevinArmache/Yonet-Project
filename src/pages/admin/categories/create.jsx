import AdminLayout from 'layouts/AdminLayout'
import { getSession } from 'next-auth/react';
import React from 'react'
import { prisma } from 'utils/prisma';

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

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email
      }
    })

    if (user.isAdmin) {
      
      return {
        props: {
          
        },
      };
    } else {
      return {
        redirect: {
          destination: '/403',
          permanent: false,
        },
      };
    }

  }

}

const CreateCategory = () => {
  return (
    <AdminLayout title="Créer une nouvelle catégorie">

    </AdminLayout>
  )
}

export default CreateCategory