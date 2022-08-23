import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeExercisePageRoutingModule } from './we-exercise-routing.module';

import { WeExercisePage } from './we-exercise.page';

import { SharedModule } from '../../shared/shared.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeExercisePageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [WeExercisePage]
})
export class WeExercisePageModule {}
