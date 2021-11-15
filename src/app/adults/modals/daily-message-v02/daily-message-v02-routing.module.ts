import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyMessageV02Page } from './daily-message-v02.page';

const routes: Routes = [
  {
    path: '',
    component: DailyMessageV02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyMessageV02PageRoutingModule {}
