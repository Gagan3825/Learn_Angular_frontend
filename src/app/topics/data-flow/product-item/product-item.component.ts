import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:any;
  @Output() addtocart=new EventEmitter<any>();
  @Output() deletetocart=new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  passitemstoparent(){
    this.addtocart.emit(this.product)
  }
  deleteitemstoparent(){
    this.deletetocart.emit(this.product)
  }
}
