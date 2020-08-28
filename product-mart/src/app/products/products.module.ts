import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDatService } from './product-dat.service';
import { HttpClientModule } from '@angular/common/http';
import { PmMaterialModule } from '../material-module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    PmMaterialModule,
  ],
  providers: [ProductDatService],
})
export class ProductsModule {}
