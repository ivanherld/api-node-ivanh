import * as model from '../models/products.model.js';

export const getAllProducts = () => {
    return model.getAllProducts();
};

export const getProductById = (id) => {
    return model.getProductById(id);
}

export const createProduct = async (productData) => {
    
    const dataNewProduct = {
        name: productData.name,
        price: productData.price,
        categories: productData.categories,
    };

    return model.createProduct(dataNewProduct);

}

export const deleteProduct = async (id) => {
    return model.deleteProduct(id);
}

export const updateProduct = async (id, productData) => {
    return model.updateProduct(id, productData);
}