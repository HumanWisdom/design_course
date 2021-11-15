import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageDiscountPage } from './webpage-discount.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageDiscountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageDiscountPageRoutingModule {}
