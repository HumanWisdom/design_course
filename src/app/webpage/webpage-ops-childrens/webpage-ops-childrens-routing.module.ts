import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageOpsChildrensPage } from './webpage-ops-childrens.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageOpsChildrensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageOpsChildrensPageRoutingModule {}
