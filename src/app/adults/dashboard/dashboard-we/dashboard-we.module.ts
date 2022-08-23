import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardWePageRoutingModule } from './dashboard-we-routing.module';

import { DashboardWePage } from './dashboard-we.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardWePageRoutingModule,
    SharedModule
  ],
  declarations: [DashboardWePage]
})
export class DashboardWePageModule {}
