import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageMkBookPage } from './webpage-mk-book.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageMkBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageMkBookPageRoutingModule {}
