import { SellerProfile } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import slug from "slug";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import prisma from "../utils/prisma";

// @route POST api/vendeur/profile/
// @desc create a new category
// @access PRIVATE
const postSellerProfile = catchAsyncErrors(async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session) {
    const { bio, logo, phoneNumber, email, website, name  }: SellerProfile = req.body


    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })
    

    const sellerProfile = await prisma.sellerProfile.create({
      data: {
        userId: user.id,
        bio,
        name,
        logo,
        slug: slug(name),
        phoneNumber,
        email,
        website
      }
    })
  
    res.status(200).json({
      status: "success",
      data: sellerProfile
    })

  } else {
    res.status(401).json({
      status: "Unauthorized",
    })
  }
})


export { postSellerProfile }