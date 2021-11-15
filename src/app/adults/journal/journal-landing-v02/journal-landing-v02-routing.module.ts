import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalLandingV02Page } from './journal-landing-v02.page';

const routes: Routes = [
  {
    path: '',
    component: JournalLandingV02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalLandingV02PageRoutingModule {}
