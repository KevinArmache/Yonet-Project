import nc from 'next-connect';

import { getCategories } from 'controllers/CategoriesController'; 
import onError from 'middlewares/error';


const handler = nc({ onError })


// Get all categories
handler.get(getCategories);


export default handler;