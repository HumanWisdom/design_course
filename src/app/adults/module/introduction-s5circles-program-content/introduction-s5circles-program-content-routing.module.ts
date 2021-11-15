import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionS5circlesProgramContentPage } from './introduction-s5circles-program-content.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductionS5circlesProgramContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductionS5circlesProgramContentPageRoutingModule {}
