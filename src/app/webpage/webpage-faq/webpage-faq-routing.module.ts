import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageFaqPage } from './webpage-faq.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageFaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageFaqPageRoutingModule {}
