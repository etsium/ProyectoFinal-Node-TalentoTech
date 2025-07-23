import { Router } from 'express'

const router = Router();

import { deleteProductById, getAllProducts, getProductById, createProduct, searchByNameProduct, updatedProductById } from '../controllers/products.controller.js';
import {auth} from '../middlewares/auth.middleware.js';


router.get('/products', getAllProducts);

router.get('/products/search', searchByNameProduct);

router.get('/products/:id', getProductById);

router.post('/products/create', auth, createProduct)

router.put('/products/:id', auth, updatedProductById)

router.delete('/products/:id', auth,deleteProductById)

export default router;