import { Injectable } from '@angular/core';

// traemos la base de datos de firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList : AngularFireList<any>;
  selectedProduct: Product = new Product();
  

  constructor(private firebase: AngularFireDatabase) { }

  getProducts()
  {
    return this.productList = this.firebase.list('products')
  }

  inserProduct( product : Product) 
  {
    this.productList.push({
      name:product.name,
      category:product.category,
      location:product.location,
      price:product.price
    })
  }
 // actualizando el producto
  updateProduct(product:Product){
    this.productList.update(product.$key , {
      name:product.name,
      category:product.category,
      location:product.location,
      price:product.price
    })
  }
 // Eliminando Producto
  deleteProduct($key: string){
    this.productList.remove($key)
  }

}
