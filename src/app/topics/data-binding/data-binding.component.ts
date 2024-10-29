import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  //  username:string='Gagandeep Singh'
  //  isDisable=true;
  //  title:string='Mitroo'

  name:string="Gagan"
  email:string='xyz@gmail.com'
  constructor() { }

  ngOnInit(): void {
  }
  
  
}
