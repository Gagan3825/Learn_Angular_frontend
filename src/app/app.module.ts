import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './signin/signin.component';
import { DataBindingComponent } from './topics/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveLearnComponent } from './topics/directive-learn/directive-learn.component';
import { HighlightDirective } from './topics/directive-learn/highlight.directive';
import { ProductListComponent } from './topics/data-flow/product-list/product-list.component';
import { ProductItemComponent } from './topics/data-flow/product-item/product-item.component';
import { FormValidationComponent } from './topics/form-validation/form-validation.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SigninComponent,
    DataBindingComponent,
    DirectiveLearnComponent,
    HighlightDirective,
    ProductListComponent,
    ProductItemComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
