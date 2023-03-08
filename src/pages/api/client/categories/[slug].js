import nc from 'next-connect';

import { getCategoryBySlug } from 'controllers/CategoriesController'; 
import onError from 'middlewares/error';


const handler = nc({ onError })


// Get category by slug with all related services
handler.get(getCategoryBySlug);


export default handler;