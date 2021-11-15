import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageHelpPage } from './webpage-help.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageHelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageHelpPageRoutingModule {}
