import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageTestimonialsPage } from './webpage-testimonials.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageTestimonialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageTestimonialsPageRoutingModule {}
