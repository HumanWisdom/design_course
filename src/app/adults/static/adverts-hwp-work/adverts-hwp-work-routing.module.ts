import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertsHwpWorkPage } from './adverts-hwp-work.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertsHwpWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertsHwpWorkPageRoutingModule {}
