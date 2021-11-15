import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageReferFriendPage } from './webpage-refer-friend.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageReferFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageReferFriendPageRoutingModule {}
