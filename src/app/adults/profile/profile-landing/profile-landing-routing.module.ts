import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileLandingPage } from './profile-landing.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileLandingPageRoutingModule {}
