import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HwpProjectsPageRoutingModule } from './hwp-projects-routing.module';

import { HwpProjectsPage } from './hwp-projects.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HwpProjectsPageRoutingModule,
    SharedModule
  ],
  declarations: [HwpProjectsPage]
})
export class HwpProjectsPageModule {}
