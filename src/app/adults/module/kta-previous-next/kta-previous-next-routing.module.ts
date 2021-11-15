import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KtaPreviousNextPage } from './kta-previous-next.page';

const routes: Routes = [
  {
    path: '',
    component: KtaPreviousNextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KtaPreviousNextPageRoutingModule {}
