
class ProductModelMem {

    products = [];
    lastProductId = '0';

    
    async createProduct(product) {
        product.id = String(++this.lastProductId);
        this.products.push(product);
        return product;
    }

    
    async readProducts() {
        return this.products;
    }

    async readProduct(id) {
        const product = this.products.find( product => product.id === id ) || {};
        return product;
    }


    async updateProduct(id, product) {
        product.id = id;
        const index = this.products.findIndex( product => product.id === id);
        // Si no se encontró
        if (index === -1) {
        return {};
        }
        this.products[index] = product;
        return product;
    }


    async deleteProduct(id) {
        const index = this.products.findIndex( product => product.id === id );
        // Si no se encontró
        if (index === -1) {
        return {};
        }
        const removedProduct = this.products.splice(index, 1)[0];
        return removedProduct;
    }

}

export default ProductModelMem;
