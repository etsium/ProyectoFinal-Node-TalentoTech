import * as service from '../services/product.service.js'

export const getAllProducts = async (req, res) => {
    res.json(await service.getAllProducts());
}

export const searchByNameProduct = (req, res) => {
    const { nombre } = req.query;
    const keys = Object.keys(req.query)
    const invalidParams = keys.filter(key => key !== 'nombre');

    if (invalidParams.length > 0) {
        const plural = invalidParams.length > 1;
        return res.status(400).json({
            error: `${plural ? 'L' : 'El'}${plural ? 'os' : ''} parámetr${plural ? 'os' : 'o'} '${invalidParams}' no ${plural ? 'son' : 'es'} válido${plural ? 's' : ''}`
        });
    }

    res.json(service.searchByNameProduct(nombre));
}

export const getProductById = (req, res) => {
    const { id } = req.params
    const product = service.getProductById(id);
    if (!product) {
        res.status(404).json({ error: 'No existe el producto' })
    }
    res.json(product);
}

export const postProduct = (req, res) => {
    const newProduct = service.postProduct(req.body);
    res.status(201).json(newProduct);
}

export const putProductById = (req, res) => {
    const id = parseInt(req.params.id);

    const productIndex = service.getProductIndex(id);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const updatedProduct = service.updateProduct(id, productIndex, req.body);
    res.json(updatedProduct);

}

export const deleteProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = service.getProductIndex(id);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    service.deleteProductById(productIndex)
    res.status(200).json({ message: 'El producto fue eliminado correctamente'});   
}