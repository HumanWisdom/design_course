import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StressImgAudioRcPage } from './stress-img-audio-rc.page';

const routes: Routes = [
  {
    path: '',
    component: StressImgAudioRcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StressImgAudioRcPageRoutingModule {}
