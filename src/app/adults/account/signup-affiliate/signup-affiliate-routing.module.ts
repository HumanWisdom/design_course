import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupAffiliatePage } from './signup-affiliate.page';

const routes: Routes = [
  {
    path: '',
    component: SignupAffiliatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupAffiliatePageRoutingModule {}
