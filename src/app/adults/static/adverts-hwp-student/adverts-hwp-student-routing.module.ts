import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertsHwpStudentPage } from './adverts-hwp-student.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertsHwpStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertsHwpStudentPageRoutingModule {}
