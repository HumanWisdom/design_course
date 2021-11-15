import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageSignupPage } from './webpage-signup.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageSignupPageRoutingModule {}
