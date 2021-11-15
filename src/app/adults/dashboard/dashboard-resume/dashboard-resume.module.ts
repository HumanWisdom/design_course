import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardResumePageRoutingModule } from './dashboard-resume-routing.module';

import { DashboardResumePage } from './dashboard-resume.page';

import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardResumePageRoutingModule,
    SharedModule
  ],
  declarations: [DashboardResumePage]
})
export class DashboardResumePageModule {}
