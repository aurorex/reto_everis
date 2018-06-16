import { Component, OnInit } from '@angular/core';

// Service 

import { ProductService } from '../../../services/project.service'

import { NgForm } from '@angular/forms'
import { Product } from '../../../models/product';
import { HttpClient } from '@angular/common/http';
import  {map} from 'rxjs/operators';

// Product Class 

// import { Product } from '../../../models/product' 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  itemsUrl:any;
  urlApi:any = 'http://backend-everis-retoeveris.a3c1.starter-us-west-1.openshiftapps.com/proyecto';


  constructor(private productService: ProductService, private http: HttpClient) { }

  ngOnInit() {
    this.getUrlApi();
    this.productService.getProducts();
    this.resetForm();
  }

  getUrlApi():void{
    console.log(this.urlApi);
    this.itemsUrlServiceGetUrlApi()
      .subscribe(
        itemsUrl => {
          this.itemsUrl = itemsUrl;
          console.log(this.itemsUrl);
          for(let i=0; i<itemsUrl.length;i++){
            itemsUrl[i].nombre;
            itemsUrl[i].cliente;
            itemsUrl[i].objetivo;
          }
          
        }
      )
  }

  itemsUrlServiceGetUrlApi(){
    return this.http
      .get<any[]>(this.urlApi)
      .pipe(map(data => data));

  }


  onSubmit(productForm: NgForm) {
    if(productForm.value.$key == null)
    this.productService.inserProduct(productForm.value)
    else
    this.productService.updateProduct(productForm.value);
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm) {
    if(productForm != null){
      productForm.reset();
      this.productService.selectedProduct = new Product()
    }
  }

}
