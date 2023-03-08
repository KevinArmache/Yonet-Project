import nc from 'next-connect';

import { postCategory } from 'controllers/CategoriesController'; 
import onError from 'middlewares/error';


const handler = nc({ onError })


// Create a new category
handler.post(postCategory);


export default handler;