import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPageRoutingModule } from './client-routing.module';

import { ClientPage } from './client.page';
import { DirectivesModule } from '../directives/directives.module';
import { ComponentModule } from '../components/components.module';
import { AddressComponent } from './address/address.component';
import { PasswordComponent } from './password/password.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPageRoutingModule,
    DirectivesModule,
    ReactiveFormsModule,
    ComponentModule,
    
    
  ],
  declarations: [ClientPage, AddressComponent, PasswordComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientPageModule {}
