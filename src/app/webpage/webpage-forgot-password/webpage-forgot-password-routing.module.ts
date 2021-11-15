import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageForgotPasswordPage } from './webpage-forgot-password.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageForgotPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageForgotPasswordPageRoutingModule {}
