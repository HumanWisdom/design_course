import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleEndRelatedModulesPage } from './module-end-related-modules.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleEndRelatedModulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleEndRelatedModulesPageRoutingModule {}
