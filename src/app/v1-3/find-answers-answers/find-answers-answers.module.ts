import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindAnswersAnswersPageRoutingModule } from './find-answers-answers-routing.module';

import { FindAnswersAnswersPage } from './find-answers-answers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindAnswersAnswersPageRoutingModule
  ],
  declarations: [FindAnswersAnswersPage]
})
export class FindAnswersAnswersPageModule {}
