import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomStoriesStoryPage } from './wisdom-stories-story.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomStoriesStoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomStoriesStoryPageRoutingModule {}
