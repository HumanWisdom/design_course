import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalSharingS03Page } from './journal-sharing-s03.page';

const routes: Routes = [
  {
    path: '',
    component: JournalSharingS03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalSharingS03PageRoutingModule {}
