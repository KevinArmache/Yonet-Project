import nc from 'next-connect';
import onError from '../../../../../middlewares/error'
import { postSellerProfile, getUserSellerProfile }  from '../../../../../controllers/SellerProfileController'


const handler = nc({ onError })


// Create seller profile
handler.post(postSellerProfile);


// Get current user seller profile
handler.get(getUserSellerProfile)


export default handler;