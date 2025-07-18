import { Router } from 'express'

const router = Router();

import { deleteProductById, getAllProducts, getProductById, postProduct, putProductById, searchByNameProduct } from '../controllers/products.controller.js';

router.get('/products', getAllProducts);

router.get('/products/search', searchByNameProduct);

router.get('/products/:id', getProductById);

router.post('/products', postProduct)

router.put('/products/:id',putProductById)

router.delete('/products/:id',deleteProductById)

export default router;