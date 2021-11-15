import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardV01PageRoutingModule } from './dashboard-v01-routing.module';

import { DashboardV01Page } from './dashboard-v01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardV01PageRoutingModule
  ],
  declarations: [DashboardV01Page]
})
export class DashboardV01PageModule {}
