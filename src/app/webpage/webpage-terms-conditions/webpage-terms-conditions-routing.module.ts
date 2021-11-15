import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageTermsConditionsPage } from './webpage-terms-conditions.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageTermsConditionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageTermsConditionsPageRoutingModule {}
