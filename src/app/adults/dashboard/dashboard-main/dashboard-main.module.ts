import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardMainPageRoutingModule } from './dashboard-main-routing.module';

import { DashboardMainPage } from './dashboard-main.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardMainPageRoutingModule,
    SharedModule,
  ],
  declarations: [DashboardMainPage]
})
export class DashboardMainPageModule {}
