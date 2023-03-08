import catchAsyncErrors from "middlewares/catchAsyncErrors";
import { getSession } from "next-auth/react";
import slug from "slug";
import { prisma } from "utils/prisma";

// @route POST api/admin/categories
// @desc create a new category
// @access PRIVATE && ADMIN


const postCategory = catchAsyncErrors(async (req, res) => {
  const session = await getSession();

  const { name, image, icon, description } = req.body

  if (session && session.user.isAdmin) {
    const category = await prisma.serviceCategory.create({
      data: {
        name,
        slug: slug(name),
        image,
        icon,
        description
      }
    })

    res.status(200).json({
      status: "success",
      data: category
    })
  } else {
    res.status(401).json({
      status: "Unauthorized",
    })
  }

})



// @route GET api/client/categories
// @desc get all categories
// @access PUBLIC 

const getCategories = catchAsyncErrors(async (req, res) => {
 
  const categories = await prisma.serviceCategory.findMany();

  res.status(200).json({
    status: "success",
    data: categories
  })

})


// @route GET api/client/categories/:slug
// @desc get categories details with services in category
// @access PUBLIC 

const getCategoryBySlug = catchAsyncErrors(async (req, res) => {
 
  const categoryWithServices = await prisma.serviceCategory.findUnique({
    where: {
      slug: req.query.slug,
    },
    include: {
      services: {
        orderBy: {
          bookings: {
            _count: 'desc'
          }
        }
      }
    }
  });

  res.status(200).json({
    status: "success",
    data: categoryWithServices
  })

})




// @route PATCH api/admin/categories
// @desc update category
// @access PRIVATE && ADMIN


// @route DELETE api/admin/categories
// @desc delete a category
// @access PRIVATE && ADMIN


export { postCategory, getCategories, getCategoryBySlug }