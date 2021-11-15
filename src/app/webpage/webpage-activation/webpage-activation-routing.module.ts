import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageActivationPage } from './webpage-activation.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageActivationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageActivationPageRoutingModule {}
