import { db } from './data.js'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

const productsCollection = collection(db, 'products');
let products = undefined;

export const getAllProducts = async () => {
    try {
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(error);
    }
}

export const searchByNameProduct = async (nombre) => {
    products = products || await getAllProducts();
    return searchProduct(nombre);
}
const searchProduct = (nombre) => {
    return products.filter((item) => item.nombre.toLowerCase().includes(nombre.toLowerCase()));
}

export const getProductById = async (id) => {
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    } catch (error) {
        console.error(error);
    }
}

export const createProduct = async (data) => {
    try {
        const docRef = await addDoc(productsCollection, data);
        return { id: docRef.id, ...data };
    } catch (error) {
        console.error(error);
    }
}

export const updatedProductById = async (id, productData) => {
    try {
        const productRef = doc(productsCollection, id)
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await setDoc(productRef, productData);
        return { id, ...productData };
    } catch (error) {
        console.error(error);
    }
}

export const deleteProductById = async (id) => {
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await deleteDoc(productRef);
        return true;
    } catch (error) {
        console.error(error);
    }
}