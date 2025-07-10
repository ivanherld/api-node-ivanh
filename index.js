import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
    //res.json({ message: "Hola Middleware"});
    //console.log(req.method);
    next();
});

app.get('/', (req, res) => {
    res.json({message: "Bienvenidos a nuestra API REST"});
});

import productsRouter from './src/routes/products.router.js';
app.use('/api', productsRouter);

import notFound from './src/middlewares/not-found.js';
app.use(notFound);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));