import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpagePrivacyPolicyPage } from './webpage-privacy-policy.page';

const routes: Routes = [
  {
    path: '',
    component: WebpagePrivacyPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpagePrivacyPolicyPageRoutingModule {}
