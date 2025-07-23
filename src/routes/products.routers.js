import { Router } from 'express'

const router = Router();

import { deleteProductById, getAllProducts, getProductById, createProduct, searchByNameProduct, updatedProductById } from '../controllers/products.controller.js';

router.get('/products', getAllProducts);

router.get('/products/search', searchByNameProduct);

router.get('/products/:id', getProductById);

router.post('/products/create', createProduct)

router.put('/products/:id',updatedProductById)

router.delete('/products/:id',deleteProductById)

export default router;