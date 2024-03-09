import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseCompletedPageRoutingModule } from './purchase-completed-routing.module';

import { PurchaseCompletedPage } from './purchase-completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseCompletedPageRoutingModule
  ],
  declarations: [PurchaseCompletedPage]
})
export class PurchaseCompletedPageModule {}
