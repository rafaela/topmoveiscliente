import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { FormatNumberPipeModule } from '../pipes/format-number.module';
import { PopoverComponent } from '../components/popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    FormatNumberPipeModule,
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
