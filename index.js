import express from 'express';
const app = express();

const products = [
    {
        id:1,
        name: "Camiseta Deportiva",
        price: 150,
        categories: ["ropa", "deportes"],
    },
    {
        id: 2,
        name: "Zapatos TImberland",
        price: 1200,
        categories: ["calzado", "urban"],
    }
]

app.use((req, res, next) => {
    //res.json({ message: "Hola Middleware"});
    console.log(req.method);
    next();
});

app.get('/', (req, res) => {
    res.json({message: "Bienvenidos a nuestra API REST"});
})

app.get("/products", (req, res) => {
    const {category} = req.query
    
    if(category){
        const productsFiltered = products.filter(
            item => item.categories.includes(category));

        res.json({productsFiltered});
    }else
    {res.json({products});}
})


app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(item => item.id == id);

    if (!product){
        res.status(404).json({error: 'No existe el producto'});
    }

    res.json(product);
});

import notFound from './src/middlewares/not-found.js';
app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));