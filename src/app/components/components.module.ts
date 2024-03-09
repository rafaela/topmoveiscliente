import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FeaturedItemComponent } from './featured-item/featured-item.component';
import { CardProductComponent } from './card-product/card-product.component';
import { FormatNumberPipeModule } from '../pipes/format-number.module';
import { PopoverComponent } from './popover/popover.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FeaturedItemComponent,
    CardProductComponent,
    PopoverComponent
  ],
  imports: [
    CommonModule,
    FormatNumberPipeModule
   
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [
    HeaderComponent,
    FeaturedItemComponent,
    CardProductComponent,
  ],
})
export class ComponentModule { }
