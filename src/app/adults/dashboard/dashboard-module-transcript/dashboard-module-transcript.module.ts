import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardModuleTranscriptPageRoutingModule } from './dashboard-module-transcript-routing.module';

import { DashboardModuleTranscriptPage } from './dashboard-module-transcript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardModuleTranscriptPageRoutingModule
  ],
  declarations: [DashboardModuleTranscriptPage]
})
export class DashboardModuleTranscriptPageModule {}
