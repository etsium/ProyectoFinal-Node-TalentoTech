import express from 'express';
import cors from 'cors';
import { error } from 'console';

const app = express()

const products = [
    { id: 1, nombre: 'Uno 1', precio: '10.0', cantidad: 100 },
    { id: 2, nombre: 'Dos 2', precio: '15.0', cantidad: 200 },
    { id: 3, nombre: 'Tres 3', precio: '20.0', cantidad: 300 }
]

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "API Rest en Node.js" })
})

app.get('/products', (req, res) => {
    res.json(products);
})

app.get('/products/search', (req, res) => {
    const { nombre } = req.query;
    const filtered = products.filter((item) => item.nombre.toLowerCase().includes(nombre.toLocaleLowerCase()))
    res.json(filtered);
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(item => item.id == id)
    if (!product) {
        res.status(404).json({ error: 'No existe el producto' })
    }
    res.json(product);
})

app.post('/products', (req, res) => {
    const { nombre, precio, cantidad } = req.body

    const newProduct = {
        id: products.length + 1,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    }

    products.push(newProduct);
    res.status(201).json(newProduct);
})

app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);

    const { nombre, precio, cantidad } = req.body;

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    products[productIndex] = { id: id, nombre, precio, cantidad };
    res.json(products[productIndex]);
})

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    products.splice(productIndex, 1);
    res.status(204).send();
})

app.use((req, res, next) => {
    res.status(404).json({error: 'Not Found'});
})
const PORT = 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))