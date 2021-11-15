import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StressImgTxtLongPage } from './stress-img-txt-long.page';

const routes: Routes = [
  {
    path: '',
    component: StressImgTxtLongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StressImgTxtLongPageRoutingModule {}
