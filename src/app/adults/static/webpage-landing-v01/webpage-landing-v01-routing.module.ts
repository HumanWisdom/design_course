import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageLandingV01Page } from './webpage-landing-v01.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageLandingV01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageLandingV01PageRoutingModule {}
