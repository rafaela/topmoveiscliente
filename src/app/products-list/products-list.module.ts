import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsListPageRoutingModule } from './products-list-routing.module';

import { ProductsListPage } from './products-list.page';
import { FormatNumberPipeModule } from '../pipes/format-number.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsListPageRoutingModule,
    FormatNumberPipeModule,
  ],
  declarations: [ProductsListPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProductsListPageModule {}
