import { Component, OnInit } from '@angular/core';

// Service 

import { ProductService } from '../../../services/project.service'

import { NgForm } from '@angular/forms'
import { Product } from '../../../models/product';

// Product Class 

// import { Product } from '../../../models/product' 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
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
