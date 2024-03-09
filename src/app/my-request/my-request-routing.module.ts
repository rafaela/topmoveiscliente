import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRequestPage } from './my-request.page';

const routes: Routes = [
  {
    path: '',
    component: MyRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRequestPageRoutingModule {}
