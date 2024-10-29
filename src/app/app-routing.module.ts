import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';
import { DataBindingComponent } from './topics/data-binding/data-binding.component';
import { DirectiveLearnComponent } from './topics/directive-learn/directive-learn.component';
import { ProductListComponent } from './topics/data-flow/product-list/product-list.component';

const routes: Routes = [
  {
    path:'',component:MainComponent
  },
  {
    path:"signin",component:SigninComponent
  },
  {
    path:"data-bind",component:DataBindingComponent
  },
  {
    path:"directives-learn",component:DirectiveLearnComponent
  },
  {
    path:"data-flow",component:ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
