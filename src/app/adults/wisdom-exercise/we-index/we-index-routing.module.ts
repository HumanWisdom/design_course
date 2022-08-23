import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeIndexPage } from './we-index.page';

const routes: Routes = [
  {
    path: '',
    component: WeIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeIndexPageRoutingModule {}
