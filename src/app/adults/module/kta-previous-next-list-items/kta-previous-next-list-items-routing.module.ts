import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KtaPreviousNextListItemsPage } from './kta-previous-next-list-items.page';

const routes: Routes = [
  {
    path: '',
    component: KtaPreviousNextListItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KtaPreviousNextListItemsPageRoutingModule {}
