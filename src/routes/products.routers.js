import { Router } from 'express'

const router = Router();

import { deleteProductById, getAllProducts, getProductById, getProductByName, postProduct, putProductById } from '../controllers/products.controller.js';

router.get('/products', getAllProducts);

router.get('/products/search', getProductByName);

router.get('/products/:id', getProductById);

router.post('/products', postProduct)

router.put('/products/:id',putProductById)

router.delete('/products/:id',deleteProductById)

export default router;