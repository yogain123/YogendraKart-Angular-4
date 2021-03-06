import { Product } from '../../sharedd/models/product';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../sharedd/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[];

  category : string;
  filteredArray : any[];

  constructor(public router : Router, public route : ActivatedRoute, private productService : ProductService) {
    this.products = this.productService.getAllData();
   }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params=>{
      this.category = params.get("category");      
      if(this.category!=null){
        this.filteredArray = this.productService.getAllData().filter(item=>item.title==this.category);
        this.products = this.filteredArray;
      }
      else
        this.products = this.productService.getAllData();
    });
  }
ngOnDestroy(){
  console.log("product component destroy");
}
}
