import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyMessageV01Page } from './daily-message-v01.page';

const routes: Routes = [
  {
    path: '',
    component: DailyMessageV01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyMessageV01PageRoutingModule {}
