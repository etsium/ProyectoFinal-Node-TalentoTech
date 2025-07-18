const products = [
    { id: 1, nombre: 'Uno 1', precio: '10.0', cantidad: 100 },
    { id: 2, nombre: 'Dos 2', precio: '15.0', cantidad: 200 },
    { id: 3, nombre: 'Tres 3', precio: '20.0', cantidad: 300 }
]

export const getAllProducts = (req, res) => {
    res.json(products);
}

export const getProductByName = (req, res) => {
    const { nombre } = req.query;
    const filtered = products.filter((item) => item.nombre.toLowerCase().includes(nombre.toLocaleLowerCase()))
    res.json(filtered);
}

export const getProductById = (req, res) => {
    const { id } = req.params
    const product = products.find(item => item.id == id)
    if (!product) {
        res.status(404).json({ error: 'No existe el producto' })
    }
    res.json(product);
}

export const postProduct = (req, res) => {
    const { nombre, precio, cantidad } = req.body

    const newProduct = {
        id: products.length + 1,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    }

    products.push(newProduct);
    res.status(201).json(newProduct);
}

export const putProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    
    const { nombre, precio, cantidad } = req.body;
    
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    
    products[productIndex] = { id: id, nombre, precio, cantidad };
    res.json(products[productIndex]);
}

export const deleteProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    products.splice(productIndex, 1);
    res.status(204).send();
}