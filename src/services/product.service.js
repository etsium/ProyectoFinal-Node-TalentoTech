import * as model from '../models/product.model.js'

export const getAllProducts = async () => {
    return await model.getAllProducts();
}

export const searchByNameProduct = (nombre) => {
    return model.searchByNameProduct(nombre);
}

export const getProductById = (id) => {
    return model.getProductById(id);
}

export const postProduct = (data) => {
    const { nombre, precio, stock, imagen, categoria, descripcion, tamanio, alcohol, volumen_alcohol, origen } = data

    const newProduct = {
        id: model.getLenghtProduct() + 1,
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

    return model.postProduct(newProduct);
}

export const updateProduct = (id, productIndex, data) => {

    const product = model.getProductById(id);

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

    return model.putProductById(productIndex, updatedProduct);
};


export const getProductIndex = (id) => {
    return model.getProductIndex(id);
} 

export const deleteProductById = (productIndex) => {
    model.deleteProductById(productIndex);
}