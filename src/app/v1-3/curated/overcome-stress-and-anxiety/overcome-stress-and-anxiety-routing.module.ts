import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvercomeStressAndAnxietyPage } from './overcome-stress-and-anxiety.page';

const routes: Routes = [
  {
    path: '',
    component: OvercomeStressAndAnxietyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvercomeStressAndAnxietyPageRoutingModule {}
