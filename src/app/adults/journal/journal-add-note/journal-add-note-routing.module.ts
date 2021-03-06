import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalAddNotePage } from './journal-add-note.page';

const routes: Routes = [
  {
    path: '',
    component: JournalAddNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalAddNotePageRoutingModule {}
