import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionS5circlesPage } from './introduction-s5circles.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductionS5circlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductionS5circlesPageRoutingModule {}
