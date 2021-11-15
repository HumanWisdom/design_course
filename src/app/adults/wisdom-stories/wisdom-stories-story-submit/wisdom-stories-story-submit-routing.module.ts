import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomStoriesStorySubmitPage } from './wisdom-stories-story-submit.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomStoriesStorySubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomStoriesStorySubmitPageRoutingModule {}
