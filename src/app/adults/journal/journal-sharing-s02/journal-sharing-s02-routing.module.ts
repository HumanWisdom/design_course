import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalSharingS02Page } from './journal-sharing-s02.page';

const routes: Routes = [
  {
    path: '',
    component: JournalSharingS02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalSharingS02PageRoutingModule {}
