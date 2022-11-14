import config from '../config.js';

import ProductModel from "../model/products.js";

import ProductValidator from '../model/validators/ProductValidator.js';


const modelProducts = ProductModel.get(config.PERSISTENCE_TYPE);


const getProducts = async () => {
    const products = await modelProducts.readProducts();
    return products;
};



const getProduct = async id => {
    const product = await modelProducts.readProduct(id);
    return product;
};



const createProduct = async product => {

    const validationError = ProductValidator.validate(product);

    if(!validationError) {
        const createdProduct = await modelProducts.createProduct(product);
        return createdProduct;
    } else {
        console.log(validationError);
        // throw new Error(`Error de validación en createProduct: ${validationError.details[0].message}`);
        console.error(`Error de validación en createProduct: ${validationError.details[0].message}`);
        return {};
    }

};



const updateProduct = async (id, product) => {

    const validationError = ProductValidator.validate(product);

    if(!validationError) {
        const updatedProduct = await modelProducts.updateProduct(id, product);
        return updatedProduct;    
    } else {
        console.log(validationError);
        // throw new Error(`Error de validación en updateProduct: ${validationError.details[0].message}`);
        console.error(`Error de validación en updateProduct: ${validationError.details[0].message}`);
        return {};
    }

};


const deleteProduct = async id => {
    const removedProduct = await modelProducts.deleteProduct(id);
    return removedProduct;
};


export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
