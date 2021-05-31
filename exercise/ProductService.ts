import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService {

    private dataSource: SimpleDataSource;
    private products: Array<Product>;

    constructor() {

        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();

        this.dataSource.GetProducts().forEach(p => this.products.push(p));
        // buradaki getProducts da dönerken this products a onları ekle.

    }

    getById(id: number): Product {
        return this.products.filter(p => (p.id == id))[0];
    }

    getProducts(): Product[] {
        return this.products;
    }

    saveProduct(product: Product): void {
        if (product.id == 0 || product.id == null) { // yeni kayıt
            product.id = this.generatedID();
            this.products.push(product);
        } else { // güncelleme

            let index;

            for (let i = 0; index < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product); // verilen indexden itibaren 1 elemana product'ı ekliyor.
        }

    }

    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);

        if (index > 0) {
            this.products.splice(index, 1); // verilen indeksten itibaren 1 elemanı boş hale çeviriyor. Yani siliyor.
        }

    }

    private generatedID(): number { // bu method sadece bu class içinde çalışır..

        let key = 1;

        while (this.getById(key) != null) {
            key++;
        }

        return key;

    }

}