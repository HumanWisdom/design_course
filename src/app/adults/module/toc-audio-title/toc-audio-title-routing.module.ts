import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TocAudioTitlePage } from './toc-audio-title.page';

const routes: Routes = [
  {
    path: '',
    component: TocAudioTitlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TocAudioTitlePageRoutingModule {}
