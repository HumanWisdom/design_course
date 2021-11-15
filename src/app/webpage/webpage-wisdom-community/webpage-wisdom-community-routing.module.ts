import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageWisdomCommunityPage } from './webpage-wisdom-community.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageWisdomCommunityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageWisdomCommunityPageRoutingModule {}
