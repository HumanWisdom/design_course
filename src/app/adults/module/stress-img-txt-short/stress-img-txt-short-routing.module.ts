import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StressImgTxtShortPage } from './stress-img-txt-short.page';

const routes: Routes = [
  {
    path: '',
    component: StressImgTxtShortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StressImgTxtShortPageRoutingModule {}
