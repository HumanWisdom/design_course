import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalLandingV01Page } from './journal-landing-v01.page';

const routes: Routes = [
  {
    path: '',
    component: JournalLandingV01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalLandingV01PageRoutingModule {}
