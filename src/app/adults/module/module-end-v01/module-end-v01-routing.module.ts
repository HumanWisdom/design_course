import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleEndV01Page } from './module-end-v01.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleEndV01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleEndV01PageRoutingModule {}
