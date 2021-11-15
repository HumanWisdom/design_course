import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KtaPreviousDonePage } from './kta-previous-done.page';

const routes: Routes = [
  {
    path: '',
    component: KtaPreviousDonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KtaPreviousDonePageRoutingModule {}
