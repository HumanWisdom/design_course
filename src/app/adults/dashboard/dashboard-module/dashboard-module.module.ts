import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardModulePageRoutingModule } from './dashboard-module-routing.module';

import { DashboardModulePage } from './dashboard-module.page';

import {SharedModule} from '../../shared/shared.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardModulePageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule,
  ],
  declarations: [DashboardModulePage]
})
export class DashboardModulePageModule {}
