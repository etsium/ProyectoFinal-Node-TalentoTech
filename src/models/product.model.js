import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;

const jsonPath = path.join(__dirname, "products.json");

const json = fs.readFileSync(jsonPath, "utf-8");

const products = JSON.parse(json);

import {db} from './data.js'
import { collection, getDocs } from "firebase/firestore";

const productsCollection = collection(db, 'products');

export const getLenghtProduct = () => {
    return products.length;
}

export const getAllProducts = async () => {
    try {
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    } catch (error) {
        console.error(error);
    }
}

export const searchByNameProduct = (nombre) => {
    return products.filter((item) => item.nombre.toLowerCase().includes(nombre.toLowerCase()))
}

export const getProductById = (id) => {
    return products.find(item => item.id == id)
}

export const postProduct = (newProduct) => {
    products.push(newProduct);
    return newProduct;
}

export const putProductById = (productIndex, product) => {
    return products[productIndex] = product;
}

export const getProductIndex = (id) => {
    return products.findIndex((p) => p.id === id);
} 

export const deleteProductById = (productIndex) => {
    return products.splice(productIndex, 1);
}