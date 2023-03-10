import axios from 'axios';
import AdminLayout from 'layouts/AdminLayout'
import { getSession } from 'next-auth/react';
import React from 'react'
import CategoryForm from '../../../../components/Forms/CreateCategoryForm';
import prisma from '../../../../utils/prisma';

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
  const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
  const addCategory = (data) => axios.post(`/api/admin/categories`, data, config);

  return (
    <AdminLayout title="Créer une nouvelle catégorie">
       <div className='mx-4 items-center sm:max-w-4xl sm:mx-auto'>

        <h1 className='text-gray-700 font-semibold text-2xl mb-4'>
          Créer une catégorie
        </h1>
        </div>
        <div>
          <CategoryForm
            buttonText='Enregistrer'
            onSubmit={addCategory}
            redirectPath='/admin/categories'
          />
        </div>
    </AdminLayout>
  )
}

export default CreateCategory