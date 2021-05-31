import { Product } from './Product';

export interface IProductService {
    getById(id:number) : Product;
    getProducts() : Array<Product>; // veya Product[]
    saveProduct(product:Product) : void;
    deleteProduct(product:Product) : void;
}