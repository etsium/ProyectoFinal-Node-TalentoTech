import * as service from '../services/product.service.js'

export const getAllProducts = async (req, res) => {
    const products = await service.getAllProducts();
    res.json(products);
}

export const searchByNameProduct = async (req, res) => {
    const { nombre } = req.query;
    const keys = Object.keys(req.query)
    const invalidParams = keys.filter(key => key !== 'nombre');

    if (invalidParams.length > 0) {
        const plural = invalidParams.length > 1;
        return res.status(400).json({
            error: `${plural ? 'L' : 'El'}${plural ? 'os' : ''} parámetr${plural ? 'os' : 'o'} '${invalidParams}' no ${plural ? 'son' : 'es'} válido${plural ? 's' : ''}`
        });
    }

    res.json(await service.searchByNameProduct(nombre));
}

export const getProductById = async (req, res) => {
    const { id } = req.params
    const product = await service.getProductById(id);

    if (!product) {
        res.status(404).json({ error: 'No existe el producto' })
    }

    res.json(product);
}

export const createProduct = async (req, res) => {
    try {
        const newProduct = await service.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const updatedProductById = async (req, res) => {
    const id = req.params.id;
    const updatedProduct = await service.updatedProductById(id, req.body);

    res.json(updatedProduct);

}

export const deleteProductById = async (req, res) => {
    await service.deleteProductById(req.params.id)
    res.status(200).json({ message: 'El producto fue eliminado correctamente' });
}