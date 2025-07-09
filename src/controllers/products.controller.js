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

export const searchProducts = (req, res) => {
    const {name} = req.query;

    if (!name){
        return res.status(400).json({error: 'El nombre es requerido'});
    };

    const productsFiltered = products.filter(item =>
         item.name.toLowerCase().includes(name.toLowerCase())
    );

    if (productsFiltered.length == 0){
        return res.status(404).json({ error: "No se encontraron productos"});
    };

    res.json(productsFiltered);
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    console.log("ID recibido:", id);
    const product = await Model.getProductById(id);

    if (!product){
        res.status(404).json({error: 'No existe el producto'});
    }

    res.json(product);
};

