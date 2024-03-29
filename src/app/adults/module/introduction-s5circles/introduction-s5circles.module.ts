import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductionS5circlesPageRoutingModule } from './introduction-s5circles-routing.module';

import { IntroductionS5circlesPage } from './introduction-s5circles.page';

import { SharedModule } from '../../shared/shared.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductionS5circlesPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [IntroductionS5circlesPage]
})
export class IntroductionS5circlesPageModule {}
