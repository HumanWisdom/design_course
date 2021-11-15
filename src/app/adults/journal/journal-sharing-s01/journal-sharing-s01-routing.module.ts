import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalSharingS01Page } from './journal-sharing-s01.page';

const routes: Routes = [
  {
    path: '',
    component: JournalSharingS01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalSharingS01PageRoutingModule {}
