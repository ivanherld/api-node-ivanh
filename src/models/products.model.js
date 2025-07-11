import { db } from './firebase.js';

import { collection, getDocs, doc, getDoc, addDoc, deleteDoc, setDoc } from 'firebase/firestore';

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
    try {
      const snapshot = await getDocs(productsCollection);
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));   
    } catch (error){
        console.error(error);
    }
};

export const getProductById = async (id) => {
    try{
        console.log("ID recibido:", id);
        const productRef = doc(productsCollection, id); //Consulta a la db
        const snapshot = await getDoc(productRef); // obtengo el objeto
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null; //verifico si existe
    } catch (error) {
        console.error(`Error al obtener el producto con ID ${id}:`, error);
        //throw error; no tiramos exception por si detengo el servidor
    }
    //return products.find((item) => item.id == id);
}

//Método para guardar un producto
export const createProduct = async (dataProduct) => {
    try{ 
        await addDoc(dataProduct);
        
    } catch (error) {
        console.error("Error al cargar el producto.", error);
    }
} 

export const deleteProduct = async (id) => {
    try{
        await deleteDoc(doc(productsCollection, id));
        console.log("Producto eliminado exitosamente.");
    } catch (error){
        console.error(`Error al eliminar el producto con ID ${id}:`, error)
    }
    
}

//Con método PUT
export const updateProduct = async (id, productData) => {
    try{
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await setDoc(productRef, productData);
        return {id, ...productData };
    } catch (error) {
        console.error(error);
    }
}
