import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageShareGiftOfWisdomPage } from './webpage-share-gift-of-wisdom.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageShareGiftOfWisdomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageShareGiftOfWisdomPageRoutingModule {}
