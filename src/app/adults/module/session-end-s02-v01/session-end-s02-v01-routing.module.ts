import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionEndS02V01Page } from './session-end-s02-v01.page';

const routes: Routes = [
  {
    path: '',
    component: SessionEndS02V01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionEndS02V01PageRoutingModule {}
