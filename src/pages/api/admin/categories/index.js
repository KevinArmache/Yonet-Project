import nc from 'next-connect';
import onError from '../../../../../middlewares/error'
import { postCategory, getCategories } from  '../../../../../controllers/CategoriesController'


const handler = nc({ onError })


// Create a new category
handler.post(postCategory);


handler.get(getCategories)


export default handler;