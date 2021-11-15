import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StressImgAudioPageRoutingModule } from './stress-img-audio-routing.module';

import { StressImgAudioPage } from './stress-img-audio.page';

import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StressImgAudioPageRoutingModule,
    SharedModule,
  ],
  declarations: [StressImgAudioPage]
})
export class StressImgAudioPageModule {}
