import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageProfilePage } from './webpage-profile.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageProfilePageRoutingModule {}
