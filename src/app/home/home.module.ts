import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentModule } from '../components/components.module';
import { FormatNumberPipeModule } from '../pipes/format-number.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentModule,
    FormatNumberPipeModule
  ],
  declarations: [
    HomePage,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomePageModule {}
