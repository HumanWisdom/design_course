import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardV02PageRoutingModule } from './dashboard-v02-routing.module';

import { DashboardV02Page } from './dashboard-v02.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardV02PageRoutingModule,
    SharedModule
  ],
  declarations: [DashboardV02Page]
})
export class DashboardV02PageModule {}
