import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StressImgAudioPage } from './stress-img-audio.page';

const routes: Routes = [
  {
    path: '',
    component: StressImgAudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StressImgAudioPageRoutingModule {}
