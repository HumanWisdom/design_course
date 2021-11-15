import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionEndS02V01PageRoutingModule } from './session-end-s02-v01-routing.module';

import { SessionEndS02V01Page } from './session-end-s02-v01.page';

import {SharedModule} from '../../shared/shared.module'

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionEndS02V01PageRoutingModule,
    SharedModule,   
    NgCircleProgressModule.forRoot({
      "radius": 75,
      "space": -5,
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#76C2AF",
      "innerStrokeColor": "#ffffff",
      "innerStrokeWidth": 5,
      "imageSrc": "/src/assets/images/background/module1/comparison&envy_session_over_mask.png",
      "imageHeight": 105,
      "imageWidth": 105,
      "showImage": true,
      "showBackground": false})  
  ],
  declarations: [SessionEndS02V01Page]
})
export class SessionEndS02V01PageModule {}
