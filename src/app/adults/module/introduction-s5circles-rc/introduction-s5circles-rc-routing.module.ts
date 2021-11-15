import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionS5circlesRcPage } from './introduction-s5circles-rc.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductionS5circlesRcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductionS5circlesRcPageRoutingModule {}
