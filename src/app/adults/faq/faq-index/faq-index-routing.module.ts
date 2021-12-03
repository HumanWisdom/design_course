import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqIndexPage } from './faq-index.page';

const routes: Routes = [
  {
    path: '',
    component: FaqIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqIndexPageRoutingModule {}
