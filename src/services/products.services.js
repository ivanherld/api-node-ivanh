import * as model from '../models/products.model.js';

export const getAllProducts = () => {
    return model.getAllProducts();
};

export const getProductById = (id) => {
    return model.getProductById(id);
}

export const createProduct = async (productData) => {
    try{
        const productos = await model.getAllProducts();
    
    // Calcular el próximo ID disponible
    const ids = productos.map(p => p.id || 0);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    const nextId = maxId + 1;

    const idProduct = nextId;

    const dataNewProduct = {
        name: productData.name,
        price: productData.price,
        categories: productData.categories,
    };

    model.addProduct(idProduct, dataNewProduct);

    return dataNewProduct;
    } catch (error){
        console.error("Error al crear producto.", error);
    }  
}

export const deleteProduct = async (id) => {
    return model.deleteProduct(id);
}