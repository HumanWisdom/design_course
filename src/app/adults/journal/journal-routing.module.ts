import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./journal-add-note/journal-add-note.module').then( m => m.JournalAddNotePageModule)
  },
  {
    path: "journal-add-note",
    loadChildren: () => import('./journal-add-note/journal-add-note.module').then( m => m.JournalAddNotePageModule)
  },
  {
    path: "journal-landing-v01",
    loadChildren: () => import('./journal-landing-v01/journal-landing-v01.module').then( m => m.JournalLandingV01PageModule)
  },
  {
    path: "journal-landing-v02",
    loadChildren: () => import('./journal-landing-v02/journal-landing-v02.module').then( m => m.JournalLandingV02PageModule)
  },
  {
    path: "journal-sharing-s01",
    loadChildren: () => import('./journal-sharing-s01/journal-sharing-s01.module').then( m => m.JournalSharingS01PageModule)
  },
  {
    path: "journal-sharing-s02",
    loadChildren: () => import('./journal-sharing-s02/journal-sharing-s02.module').then( m => m.JournalSharingS02PageModule)
  },
  {
    path: "journal-sharing-s03",
    loadChildren: () => import('./journal-sharing-s03/journal-sharing-s03.module').then( m => m.JournalSharingS03PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
