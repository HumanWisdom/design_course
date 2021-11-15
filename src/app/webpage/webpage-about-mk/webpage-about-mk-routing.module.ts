import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageAboutMkPage } from './webpage-about-mk.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageAboutMkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageAboutMkPageRoutingModule {}
