"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.GetProducts().forEach(function (p) { return _this.products.push(p); });
        // buradaki getProducts da dönerken this products a onları ekle.
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return (p.id == id); })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) { // yeni kayıt
            product.id = this.generatedID();
            this.products.push(product);
        }
        else { // güncelleme
            var index = void 0;
            for (var i = 0; index < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product); // verilen indexden itibaren 1 elemana product'ı ekliyor.
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1); // verilen indeksten itibaren 1 elemanı boş hale çeviriyor. Yani siliyor.
        }
    };
    ProductService.prototype.generatedID = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
