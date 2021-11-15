import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TocAudioTitlePageRoutingModule } from './toc-audio-title-routing.module';

import { TocAudioTitlePage } from './toc-audio-title.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TocAudioTitlePageRoutingModule,
    SharedModule
  ],
  declarations: [TocAudioTitlePage]
})
export class TocAudioTitlePageModule {}
