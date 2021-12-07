import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleEndVideosPage } from './module-end-videos.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleEndVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleEndVideosPageRoutingModule {}
