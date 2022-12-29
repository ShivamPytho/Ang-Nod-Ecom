import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { AppModule } from "../app.module";
import { AppComponent } from './../../app/app.component';
import { AppRoutingModule } from './../../app/app-routing.module';


import { NavBottomComponent } from './../shared/nav-bottom/nav-bottom.component';



@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        NavBottomComponent,

    ],
    imports: [
        CommonModule,
        AppRoutingModule



    ]
})
export class ProductsModule { }
