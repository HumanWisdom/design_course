import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductionS5circlesRcPageRoutingModule } from './introduction-s5circles-rc-routing.module';

import { IntroductionS5circlesRcPage } from './introduction-s5circles-rc.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductionS5circlesRcPageRoutingModule,
    SharedModule
  ],
  declarations: [IntroductionS5circlesRcPage]
})
export class IntroductionS5circlesRcPageModule {}
