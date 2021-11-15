import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductionS5circlesProgramContentPageRoutingModule } from './introduction-s5circles-program-content-routing.module';

import { IntroductionS5circlesProgramContentPage } from './introduction-s5circles-program-content.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductionS5circlesProgramContentPageRoutingModule,
    SharedModule
  ],
  declarations: [IntroductionS5circlesProgramContentPage]
})
export class IntroductionS5circlesProgramContentPageModule {}
