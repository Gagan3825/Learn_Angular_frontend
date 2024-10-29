import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-learn',
  templateUrl: './directive-learn.component.html',
  styleUrls: ['./directive-learn.component.css']
})
export class DirectiveLearnComponent implements OnInit {

  // iscontent:boolean=false
  // cartitems=['bmw','ninja','audi'];

  constructor() { }

  ngOnInit(): void {
  }

  // showoncontent(){
  //   this.iscontent=true
  // }
  // hidecontent(){
  //   this.iscontent=false
  // }\

  // app.component.ts

  pages = ['Home', 'Products', 'Contact'];
  activePage = 'Home';

  setActivePage(page: string) {
    this.activePage = page;
  }


}
