import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToHomescreenIosPage } from './add-to-homescreen-ios.page';

const routes: Routes = [
  {
    path: '',
    component: AddToHomescreenIosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToHomescreenIosPageRoutingModule {}
