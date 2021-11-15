import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyMessageV02PageRoutingModule } from './daily-message-v02-routing.module';

import { DailyMessageV02Page } from './daily-message-v02.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyMessageV02PageRoutingModule,
    SharedModule
  ],
  declarations: [DailyMessageV02Page]
})
export class DailyMessageV02PageModule {}
