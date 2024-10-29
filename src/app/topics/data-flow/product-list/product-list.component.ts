import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Laptopproducts=[
    { id: 1, name: 'Asus', price: 42000 },
    { id: 2, name: 'Hp', price: 50000 },
    { id: 3, name: 'Dell', price: 55000 },
    { id: 4, name: 'Mac', price: 100000 }
  ]

  newPro:any[]=[];


  constructor() { }

  ngOnInit(): void {
  }
  onAddItems(product:any){
    this.newPro.push(product);
    console.log(this.newPro);
    

  }
  onDeleteItems(product:any){
   this.newPro=this.newPro.filter(items=>items.id!==product.id)
    

  }

}
