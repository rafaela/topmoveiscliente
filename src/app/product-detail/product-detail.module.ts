import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';
import { ComponentModule } from '../components/components.module';
import { FormatNumberPipe } from '../pipes/format-number.pipe';
import { FormatNumberPipeModule } from '../pipes/format-number.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule,
    ComponentModule,
    FormatNumberPipeModule
  ],
  declarations: [ProductDetailPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProductDetailPageModule {}
