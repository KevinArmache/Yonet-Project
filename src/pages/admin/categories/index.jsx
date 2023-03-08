import Button from 'components/Buttons/Button';
import AdminLayout from 'layouts/AdminLayout';
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

const ServiceCategories = () => {
  return (
    <AdminLayout title="Catégories de service">
      <div className="flex items-start mx-4 w-full space-x-2">
        <Button
          text="Créer une nouvelle catégorie"
          url="/admin/categories/create"
        />
      </div>
    </AdminLayout>
  )
}

export default ServiceCategories