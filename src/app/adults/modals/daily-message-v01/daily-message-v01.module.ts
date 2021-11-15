import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyMessageV01PageRoutingModule } from './daily-message-v01-routing.module';

import { DailyMessageV01Page } from './daily-message-v01.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyMessageV01PageRoutingModule,
    SharedModule
  ],
  declarations: [DailyMessageV01Page]
})
export class DailyMessageV01PageModule {}
