import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageLoginPage } from './webpage-login.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageLoginPageRoutingModule {}
