import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageLandingV01PageRoutingModule } from './webpage-landing-v01-routing.module';

import { WebpageLandingV01Page } from './webpage-landing-v01.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageLandingV01PageRoutingModule,
    SharedModule
  ],
  declarations: [WebpageLandingV01Page]
})
export class WebpageLandingV01PageModule {}
