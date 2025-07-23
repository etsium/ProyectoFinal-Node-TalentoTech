import * as model from '../models/product.model.js'

export const getAllProducts = async () => {
    return await model.getAllProducts();
}

export const searchByNameProduct = async (nombre) => {
    return await model.searchByNameProduct(nombre);
}

export const getProductById = async (id) => {
    return await model.getProductById(id);
}

export const createProduct = async (data) => {
    const { nombre, precio, stock, imagen, categoria, descripcion, tamanio, alcohol, volumen_alcohol, origen } = data

    const newProduct = {
        nombre: nombre,
        precio: precio,
        stock: stock,
        imagen: imagen,
        categoria: categoria,
        descripcion: descripcion,
        tamanio: tamanio,
        alcohol: alcohol,
        volumen_alcohol: volumen_alcohol,
        origen: origen
    }

    const hasEmptyField = Object.entries(newProduct).some(([key, value]) => {
        if (key === 'imagen') return false;
        return value === null || value === undefined || (typeof value === 'string' && value.trim() === "");
    });

    if (hasEmptyField) {
        throw new Error('Faltan completar campos');
    }

    return await model.createProduct(newProduct);

}

export const updatedProductById = async (id, data) => {
    const product = await getProductById(id);
    const updatedProduct = {
        id: product.id,
        nombre: data.nombre || product.nombre,
        precio: data.precio || product.precio,
        stock: data.stock || product.stock,
        imagen: data.imagen !== undefined ? data.imagen : product.imagen,
        categoria: data.categoria || product.categoria,
        descripcion: data.descripcion || product.descripcion,
        tamanio: data.tamanio || product.tamanio,
        alcohol: data.alcohol || product.alcohol,
        volumen_alcohol: data.volumen_alcohol || product.volumen_alcohol,
        origen: data.origen || product.origen
    };

    return await model.updatedProductById(id, updatedProduct);
};

export const deleteProductById = async (id) => {
    await model.deleteProductById(id);
}