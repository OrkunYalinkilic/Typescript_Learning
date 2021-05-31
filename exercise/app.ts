import { Product } from './Product';
import { ProductService } from './ProductService';

let _productService = new ProductService();

let result;

result = _productService.getById(2);

let resultList = _productService.getProducts();

console.log("Result:");
console.log(result);

console.log("resultList:");
console.log(resultList);

let p = new Product();
p.name = "I Phone 8";
p.price = 5000;
p.category = "Telefon";

_productService.saveProduct(p);

console.log("result list'e eklendi");
console.log(resultList);

_productService.deleteProduct(_productService.getById(3));

console.log("result list'den silindi");
console.log(resultList);

p.price = 6000;
p.category = "TelefonGuncel";

console.log("result list güncellendi");
console.log(resultList);