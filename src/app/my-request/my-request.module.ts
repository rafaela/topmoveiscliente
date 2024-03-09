import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyRequestPageRoutingModule } from './my-request-routing.module';

import { MyRequestPage } from './my-request.page';
import { FormatNumberPipeModule } from '../pipes/format-number.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyRequestPageRoutingModule,
    FormatNumberPipeModule
  ],
  declarations: [MyRequestPage]
})
export class MyRequestPageModule {}
