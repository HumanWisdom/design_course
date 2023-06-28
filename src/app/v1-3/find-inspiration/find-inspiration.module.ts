import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindInspirationPageRoutingModule } from './find-inspiration-routing.module';

import { FindInspirationPage } from './find-inspiration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindInspirationPageRoutingModule
  ],
  declarations: [FindInspirationPage]
})
export class FindInspirationPageModule {}
