import * as Model from "../services/products.services.js";

export const getAllProducts = async (req, res) => {
    const {category} = req.query;

    const products = await Model.getAllProducts();
    
    if(category){
        const productsFiltered = products.filter(
            item => item.categories.includes(category));

        return res.json({productsFiltered});
        
    }
    res.json({products});
};

export const searchProducts = async (req, res) => {
    const {name} = req.query;

    if (!name){
        return res.status(400).json({error: 'El nombre es requerido'});
    };

    const products = await Model.getAllProducts();

    const productsFiltered = products.filter(item =>
         item.name.toLowerCase().includes(name.toLowerCase())
    );

    if (productsFiltered.length == 0){
        return res.status(404).json({ error: "No se encontraron productos"});
    };

    res.json(productsFiltered);
};


//OPTIMIZAR LLEVANDO A UTILITIES
export const getProductById = async (req, res) => {
    const id = req.params.id;
    console.log("ID recibido:", id);
    const product = await Model.getProductById(id);

    if (!product){
        res.status(404).json({error: 'No existe el producto'});
    }

    res.json(product);
};

export const createProduct = async (req, res) => {
    const { name, price, categories} = req.body;

    if(!name || !price || !categories){
        return res.status(400).json({error: 'Se requieren los 3 campos: Nombre, precio y lista de categorias.'});
    }
    const newProduct = await Model.createProduct({ name, price, categories});
    res.status(201).json(newProduct);
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    const product = await Model.getProductById(id);

    if (!product){
        res.status(404).json({error: 'No existe el producto'});
    }

    Model.deleteProduct(id)

    res.json({message:"producto eliminado",product});

}

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    const product = await Model.getProductById(id);

    if (!product){
        res.status(404).json({error: 'No existe el producto'});
    }

    Model.updateProduct(id, updateData);

    res.json({ message: "Producto modificado"});
}

