import fs from 'fs';
import path from "path";

const __dirname = import.meta.dirname;

const filePath = path.join(__dirname, "./products.json");

const json = fs.readFileSync(filePath, "utf-8");

const products = JSON.parse(json);

export const getAllProducts = () => {
    return products;
};

export const getProductById = (id) => {
    return products.find((item) => item.id == id);
}